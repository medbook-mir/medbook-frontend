import * as yup from 'yup'

const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  code: yup.string().required('Reset code is required')
})

export type ResetPasswordType = yup.InferType<typeof resetPasswordSchema>

export default resetPasswordSchema
