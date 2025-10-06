import { useTranslations } from 'next-intl'

const Referrals = () => {
  const t = useTranslations('settingsLayout.referralsPage')

  return <div className="p-10">{t('title')}</div>
}

export default Referrals