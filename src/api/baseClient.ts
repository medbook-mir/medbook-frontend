import Axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'
import { buildParams } from './helpers'
import { TokenService } from '@/utils/storage'
import { env } from '@/utils/env'

const API_URL = env.NEXT_API_URL || ''

declare module 'axios' {
  export interface AxiosRequestConfig {
    _retry?: boolean
    unhandled?: boolean
  }
}

export class HTTPError extends Error {
  constructor(public status: number, public cause: string) {
    super(cause)
  }
}

export class BaseClient {
  private baseUrl: string
  private axios: AxiosInstance
  private isRefreshing = false
  private refreshSubscribers: ((token: string) => void)[] = []
  private static instance: BaseClient | null = null

  private constructor() {
    // ✅ Use relative URL in browser to activate Next.js rewrites
    this.baseUrl =
      typeof window !== 'undefined'
        ? '' // browser → let Next.js handle rewrites
        : API_URL // server → can directly call API if needed

    this.axios = Axios.create({
      baseURL: this.baseUrl,
      withCredentials: false,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })

    // Interceptors
    this.axios.interceptors.request.use(this.attachToken)
    this.axios.interceptors.response.use(
      (response: AxiosResponse) => response,
      this.onApiError
    )
  }

  public static getInstance(): BaseClient {
    if (!BaseClient.instance) {
      BaseClient.instance = new BaseClient()
    }
    return BaseClient.instance
  }

  // ✅ Token handler
  private attachToken = async (req: InternalAxiosRequestConfig) => {
    const token = TokenService.getToken()
    const accessTokenExpiry = TokenService.getAccessTokenExpiry()
    const currentTime = Date.now() / 1000

    if (token && currentTime < accessTokenExpiry) {
      req.headers = req.headers || {}
      req.headers['Authorization'] = `Bearer ${token}`
    }

    // ✅ Language header
    const getLocaleFromClient = () => {
      if (typeof window !== 'undefined') {
        const pathname = window.location.pathname
        const localeMatch = pathname.match(/^\/([a-z]{2})\//)
        return localeMatch ? localeMatch[1] : 'en'
      }
      return 'en'
    }

    req.headers['Lang'] = getLocaleFromClient()
    return req
  }

  private onApiError = async (error: AxiosError) => {
    const originalRequest = error.config

    if (originalRequest && !originalRequest._retry) {
      originalRequest._retry = true
      switch (error.response?.status) {
        case 401: {
          const success = await this.refreshToken()
          if (success) {
            const newToken = TokenService.getToken()
            if (newToken) {
              originalRequest.headers['Authorization'] = `Bearer ${newToken}`
              return this.axios(originalRequest)
            }
          }
          break
        }
        case 502:
          return Promise.reject(error)
      }
    }

    return Promise.reject(error)
  }

  private refreshToken = async (): Promise<boolean> => {
    if (this.isRefreshing) {
      return new Promise((resolve) => {
        this.refreshSubscribers.push(() => resolve(true))
      })
    }
  
    this.isRefreshing = true
    try {
      const refreshToken = TokenService.getRefreshToken()
      const storedRefreshTokenExpiry = TokenService.getRefreshTokenExpiry()
      const currentTime = Date.now() / 1000
  
      if (!refreshToken || currentTime >= storedRefreshTokenExpiry) {
        TokenService.clearTokens()
        return false
      }
  
      const response = await this.axios.post('/auth/refresh', { refreshToken })
      const {
        accessToken,
        refreshToken: newRefresh,
        accessTokenExpiry: newAccessTokenExpiry,
        refreshTokenExpiry: newRefreshTokenExpiry
      } = response.data
  
      TokenService.setToken(
        accessToken,
        newRefresh,
        newAccessTokenExpiry,
        newRefreshTokenExpiry
      )
  
      this.refreshSubscribers.forEach((cb) => cb(accessToken))
      this.refreshSubscribers = []
  
      return true
    } catch (error) {
      console.warn('refreshToken error:', error)
      TokenService.clearTokens()
      return false
    } finally {
      this.isRefreshing = false
    }
  }
  

  setAccessToken = (token: string) => {
    const newToken = `Bearer ${token}`
    this.axios.defaults.headers.common.Authorization = newToken
    return newToken
  }

  // 🔧 Standardized HTTP methods
  get = async <T, K, C>(url: string, params?: K, config?: AxiosRequestConfig<C>): Promise<AxiosResponse<T>> => {
    const queryParams = params ? buildParams(params) : ''
    return this.axios.get(url + queryParams, config)
  }

  delete = async <T, K>(url: string, data?: K, body?: K): Promise<AxiosResponse<T>> => {
    return this.axios.delete(url, { params: data, data: body })
  }

  post = async <T, K>(url: string, data?: K, config?: AxiosRequestConfig<K>): Promise<AxiosResponse<T>> => {
    return this.axios.post(url, data, config)
  }

  patch = async <T, K>(url: string, data?: K, config?: AxiosRequestConfig<K>): Promise<AxiosResponse<T>> => {
    return this.axios.patch(url, data, config)
  }

  put = async <T, K>(url: string, data?: K, config?: AxiosRequestConfig<K>): Promise<AxiosResponse<T>> => {
    return this.axios.put(url, data, config)
  }
}

export const baseApiClient = BaseClient.getInstance()
