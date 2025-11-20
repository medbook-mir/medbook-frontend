import { useRouter } from '@/i18n/navigation'
import { useAppDispatch } from '@/redux/store'
import { loginThunk } from '@/redux/thunks/authThunk'
import { LoginBodyType } from '@/types'
import { useMutation } from '@/hooks/useQuery'
import { useTranslations } from 'next-intl'
import { useCustomNotification } from './useNotification'
import { TokenService } from '@/utils/storage'

export const useLogin = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const t = useTranslations()
  const { openNotification } = useCustomNotification()

  const login = useMutation({
    mutationFn: async (data: LoginBodyType) => {
      return dispatch(loginThunk(data)).unwrap()
    },
    onError: (err: any) => {
      console.log('Login error:', err)
      openNotification(
        'error',
        `${t('basic.errorsMsg.wrongSomething')}`,
        err?.result?.message || err?.message || `${t('basic.errorsMsg.tryAgain')}`
      )
    },
    onSuccess: (response) => {
      const data = response.data

      TokenService.setToken(data.accessToken, data.refreshToken, data.accessTokenExpiry, data.refreshTokenExpiry)
      openNotification('success', 'Success', 'Login successful')
    }
  })

  return { login }
}
