import * as yup from 'yup'

export const createContactSchema = (t: (key: string) => string) => yup.object({
  name: yup
    .string()
    .required(t('form.errors.nameRequired'))
    .min(2, t('form.errors.nameMinLength'))
    .max(50, t('form.errors.nameMaxLength')),
  email: yup
    .string()
    .required(t('form.errors.emailRequired'))
    .email(t('form.errors.emailInvalid')),
  subject: yup
    .string()
    .required(t('form.errors.subjectRequired'))
    .min(5, t('form.errors.subjectMinLength'))
    .max(100, t('form.errors.subjectMaxLength')),
  message: yup
    .string()
    .required(t('form.errors.messageRequired'))
    .min(10, t('form.errors.messageMinLength'))
    .max(1000, t('form.errors.messageMaxLength'))
})
