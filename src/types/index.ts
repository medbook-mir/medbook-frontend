export type EditIconProps = {
  colour?: string;
};

export type LoginBodyType = {
  username: string
  password: string
}

export type RegisterBodyType = {
  username: string
  first_name: string
  last_name: string
  birthday: string
  password: string
  repeat_password: string
}

export type VerifyBodyType = {
  email_code: string
}

export type RefreshBodyType = {
  refresh: string
}

export interface LoginResponseType {
  accessToken: string
  refreshToken: string
  accessTokenExpiry: number
  refreshTokenExpiry: number
  actionRequired?: boolean
}

export interface ApiResponseWithContent<T> {
  success: boolean
  code: number
  message: string
  data: T
  pagination?: {
    count: number
    page: number
    page_size: number
    total_pages: number
    next: string | null
    previous: string | null
    has_next: boolean
    has_previous: boolean
  }
}

// Yandex Maps API declarations
declare global {
  interface Window {
    ymaps: {
      ready: (callback: () => void) => void
      Map: new (element: HTMLElement | null, options: any) => any
      control: {
        ZoomControl: new (options: any) => any
        GeolocationControl: new (options: any) => any
      }
      Placemark: new (coordinates: [number, number], properties: any, options: any) => any
    }
  }
}

export {}
