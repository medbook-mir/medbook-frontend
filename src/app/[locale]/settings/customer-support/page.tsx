import { useTranslations } from 'next-intl'

const CustomerSupport = () => {
  const t = useTranslations('settingsLayout.customerSupportPage')

  return <div className="p-10">{t('title')}</div>
}

export default CustomerSupport
