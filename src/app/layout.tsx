import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { Toaster } from "@/components/ui/toaster";

const SITE_URL = 'https://www.igshealthcare.com';
const SITE_NAME = 'IGS Health Care';

export const viewport: Viewport = {
  themeColor: '#16a34a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'IGS Health Care — Natural Healthcare Products in Pakistan',
    template: '%s | IGS Health Care',
  },
  description:
    'IGS Health Care provides premium natural medicines including vitamins, calcium supplements, iron syrups, immune boosters, and herbal remedies. WHO-GMP certified. Available across Pakistan.',
  keywords: [
    'IGS Health Care',
    'natural medicines Pakistan',
    'vitamins Pakistan',
    'calcium supplements',
    'iron deficiency syrup',
    'immune booster Pakistan',
    'GMP certified medicines',
    'herbal healthcare',
    'multivitamin Pakistan',
    'bone health supplements',
  ],
  authors: [{ name: 'IGS Health Care', url: SITE_URL }],
  creator: 'IGS Health Care',
  publisher: 'IGS Health Care',
  category: 'Healthcare & Pharmaceuticals',
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
    type: 'website',
    locale: 'en_PK',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'IGS Health Care — Natural Healthcare Products in Pakistan',
    description:
      'Premium natural medicines & supplements — vitamins, calcium, iron, immune boosters and more. WHO-GMP certified. Serving Pakistan.',
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'IGS Health Care — Natural Healthcare Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IGS Health Care — Natural Healthcare Products in Pakistan',
    description:
      'Premium natural medicines & supplements. WHO-GMP certified. Serving Pakistan.',
    images: [`${SITE_URL}/og-image.png`],
    creator: '@IGSHealthCare',
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// ── JSON-LD: Organization (site-wide) ─────────────────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'IGS Health Care',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: 'https://uploads.onecompiler.io/43vh7ked9/43vj7vcae/Logo_IGS_Health_Care-removebg-preview.png',
    width: 400,
    height: 400,
  },
  description:
    'IGS Health Care is a Pakistan-based pharmaceutical company providing premium natural medicines and health supplements, manufactured under WHO-GMP standards.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PK',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'inquiries@igshealthcare.com',
    availableLanguage: ['English', 'Urdu'],
  },
  sameAs: [
    'https://www.facebook.com/IGSHealthCare',
    'https://www.instagram.com/IGSHealthCare',
  ],
};

// ── JSON-LD: WebSite with SearchAction ────────────────────────────────────
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'IGS Health Care',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/products?category={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-body antialiased bg-background">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow" id="main-content" role="main">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
