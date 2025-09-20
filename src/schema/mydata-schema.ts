import '@/utils/yup-locale'
import * as yup from 'yup'

const myDataSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  birthday: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().required(),
  photo: yup.string().notRequired().default('')
})

export type MyDataType = yup.InferType<typeof myDataSchema>

export default myDataSchema
