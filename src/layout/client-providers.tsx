'use client'

import '@ant-design/v5-patch-for-react-19'
import { useMemo, useEffect } from 'react'
import { NextIntlClientProvider, useLocale } from 'next-intl'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from '@/redux/store'
import AntdProvider from '@/providers/antd-provider'
import { NotificationProvider } from '@/hooks/useNotification'
import ScrollToTop from '@/components/basic/scroll-to-top'
import BackToTop from '@/components/basic/back-to-top'
import { Locale } from '@/i18n/routing'
import ProtectedComponent from '@/providers/protected-component'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LoginModal from '@/modals/login-modal'
import RegisterModal from '@/modals/register-modal'
import VerifyModal from '@/modals/verify-modal'
import { baseApiClient } from '@/api/baseClient'

interface ClientProvidersProps {
  children: React.ReactNode
  locale: Locale
  messages: any
}

// Comminting these lines to overcome the use client issue when loging
// Component to set up the locale provider for the API client
// function LocaleProvider({ children }: { children: React.ReactNode }) {
//  const locale = useLocale()

  // useEffect(() => {
    // Set up the locale provider for the API client
    // baseApiClient.setLocaleProvider(() => locale)
  // }, [locale])

  // return <>{children}</>
// }

export function ClientProviders({ children, locale, messages }: ClientProvidersProps) {
  const queryClient = useMemo(() => new QueryClient(), [])
  useEffect(() => {
    localStorage.setItem('locale', locale)
  }, [locale])

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="Asia/Tashkent">
        <AntdProvider>
          <QueryClientProvider client={queryClient}>
            <Provider store={store}>
              <NotificationProvider>
                <ProtectedComponent>
                  <Header />
                </ProtectedComponent>
                <main>{children}</main>
                <ProtectedComponent paths={['/settings']}>
                  <Footer />
                </ProtectedComponent>
                <ScrollToTop />
                <BackToTop />
                <LoginModal />
                <RegisterModal />
                <VerifyModal />
              </NotificationProvider>
            </Provider>
          </QueryClientProvider>
        </AntdProvider>
      
    </NextIntlClientProvider>
  )
}
