import { useTranslations } from 'next-intl'

const ProfileSettings = () => {
  const t = useTranslations('settingsLayout.profileSettingsPage')

  return <div className="p-10">{t('title')}</div>
}

export default ProfileSettings
