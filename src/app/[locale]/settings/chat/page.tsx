import { useTranslations } from 'next-intl'

const Chat = () => {
  const t = useTranslations('settingsLayout.chatPage')

  return <div className="p-10">{t('title')}</div>
}

export default Chat
