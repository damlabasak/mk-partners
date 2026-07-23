import type { Metadata } from 'next';
import { Cinzel, Inter } from 'next/font/google';
import { LanguageProvider } from '@/context/LanguageContext';
import '@/index.css';
import '@/styles/components/Navbar.css';
import '@/styles/components/Hero.css';
import '@/styles/components/About.css';
import '@/styles/components/Practices.css';
import '@/styles/components/Team.css';
import '@/styles/components/Career.css';
import '@/styles/components/Contact.css';
import '@/styles/components/Footer.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://damlabasak.github.io/mk-partners'),
  title: {
    default: 'MK Partners | Hukuki Danışmanlık & Avukatlık',
    template: '%s | MK Partners',
  },
  description:
    'MK Partners, Türkiye genelinde ve Roma\'da yer alan güçlü avukat ağıyla yerli ve yabancı müvekkillere yüksek kalitede hukuki danışmanlık ve avukatlık hizmetleri sunan premium bir hukuk bürosudur.',
  keywords: [
    'MK Partners',
    'Hukuk Bürosu',
    'Avukatlık',
    'Hukuki Danışmanlık',
    'Şirketler Hukuku',
    'M&A',
    'Birleşme ve Devralmalar',
    'Uyuşmazlık Çözümü',
    'Tahkim',
    'KVKK',
    'Bilişim Hukuku',
    'İş Hukuku',
    'Gayrimenkul Hukuku',
    'Roma Avukat',
    'İstanbul Avukat',
  ],
  authors: [{ name: 'MK Partners Legal Consultancy' }],
  creator: 'MK Partners',
  publisher: 'MK Partners Legal Consultancy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/mk-partners/mk-logo.png',
    shortcut: '/mk-partners/mk-logo.png',
    apple: '/mk-partners/mk-logo.png',
  },
  openGraph: {
    title: 'MK Partners | Premium Hukuki Danışmanlık & Avukatlık',
    description:
      'Türkiye genelinde ve Roma\'da yer alan güçlü avukat ağıyla yüksek kalitede hukuki danışmanlık hizmetleri.',
    url: 'https://damlabasak.github.io/mk-partners',
    siteName: 'MK Partners Legal Consultancy',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/mk-partners/mk-logo.png',
        width: 1200,
        height: 630,
        alt: 'MK Partners Legal Consultancy Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MK Partners | Hukuki Danışmanlık & Avukatlık',
    description:
      'Türkiye genelinde ve Roma\'da yer alan güçlü avukat ağıyla yüksek kalitede hukuki danışmanlık hizmetleri.',
    images: ['/mk-partners/mk-logo.png'],
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'MK Partners Legal Consultancy',
    url: 'https://damlabasak.github.io/mk-partners',
    logo: 'https://damlabasak.github.io/mk-partners/mk-logo.png',
    image: 'https://damlabasak.github.io/mk-partners/mk-logo.png',
    description:
      'MK Partners, Türkiye genelinde ve Roma\'da yer alan güçlü avukat ağıyla yerli ve yabancı müvekkillere yüksek kalitede hukuki danışmanlık ve avukatlık hizmetleri sunan premium bir hukuk bürosudur.',
    telephone: '+905054296196',
    email: 'info@meteoglukaya.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TR',
      addressLocality: 'İstanbul',
    },
    areaServed: ['Turkey', 'Rome, Italy', 'International'],
    knowsAbout: [
      'Şirketler & Ticaret Hukuku',
      'Birleşme & Devralmalar (M&A)',
      'Uyuşmazlık Çözümü & Dava',
      'İş ve Sosyal Güvenlik Hukuku',
      'Gayrimenkul & İnşaat Hukuku',
      'Teknoloji, Bilişim & KVKK',
    ],
    founder: [
      { '@type': 'Person', name: 'Av. Özgün Gizem Meteoğlu (LL.M.)' },
      { '@type': 'Person', name: 'Av. Osman Mete Meteoğlu' },
      { '@type': 'Person', name: 'Av. Selman Kaya' },
    ],
  };

  return (
    <html lang="tr" className={`${cinzel.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
