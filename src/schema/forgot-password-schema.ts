import '@/utils/yup-locale'
import * as yup from 'yup'

const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email().required(),
  email_code: yup.string().required(),
});


export type ForgotPasswordType = yup.InferType<typeof forgotPasswordSchema>

export default forgotPasswordSchema
