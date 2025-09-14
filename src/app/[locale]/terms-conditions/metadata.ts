import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions | MedVisit',
  description: 'Terms and conditions for MedVisit medical booking platform. Learn about your rights and obligations when using our healthcare services.',
  keywords: [
    'terms and conditions',
    'medical platform',
    'healthcare services',
    'doctor appointments',
    'medical booking',
    'patient rights',
    'privacy policy',
    'MedVisit'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Terms and Conditions | MedVisit',
    description: 'Terms and conditions for MedVisit medical booking platform. Learn about your rights and obligations when using our healthcare services.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions | MedVisit',
    description: 'Terms and conditions for MedVisit medical booking platform.',
  },
  alternates: {
    canonical: '/terms-conditions',
  },
}
