import { useAppDispatch } from '@/redux/store'
import { resetPasswordThunk } from '@/redux/thunks/authThunk'
import { useMutation } from '@/hooks/useQuery'
import { useCustomNotification } from './useNotification'
import { ResetPasswordType } from '@/schema/reset-password-schema'

export const useResetPassword = () => {
  const dispatch = useAppDispatch()
  const { openNotification } = useCustomNotification()

  const resetPassword = useMutation({
    mutationFn: async (data: ResetPasswordType) => {
      return dispatch(
        resetPasswordThunk({
          token: data.code,
          newPassword: data.password
        })
      ).unwrap()
    },
    onError: (err: any) => {
      openNotification('error', 'Error', err?.result?.message || err?.message || 'Try again')
    },
    onSuccess: () => {
      openNotification('success', 'Success', 'Password reset successfully')
    }
  })

  return { resetPassword }
}
