import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://kwilman.com'),
  title: {
    default: "Jolanta Kwilman – Pracownia Architektury Wnętrz",
    template: "%s | Jolanta Kwilman",
  },
  description: "Pracownia Architektury Wnętrz - projektowanie i aranżacja wnętrz prywatnych i użyteczności publicznej. Ponad 15 lat doświadczenia w projektowaniu wnętrz mieszkań, domów i przestrzeni użyteczności publicznej w Warszawie i okolicach.",
  keywords: [
    "architektura wnętrz",
    "projektowanie wnętrz",
    "aranżacja wnętrz",
    "architekt wnętrz Warszawa",
    "projekty wnętrz",
    "projekty mieszkań",
    "projekty domów",
    "wnętrza użyteczności publicznej",
    "projekty biur",
    "Jolanta Kwilman",
  ],
  authors: [{ name: "Jolanta Kwilman", url: "https://kwilman.com" }],
  creator: "Jolanta Kwilman",
  publisher: "Jolanta Kwilman",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://kwilman.com',
    siteName: 'Jolanta Kwilman – Pracownia Architektury Wnętrz',
    title: 'Jolanta Kwilman – Pracownia Architektury Wnętrz',
    description: 'Pracownia Architektury Wnętrz - projektowanie i aranżacja wnętrz prywatnych i użyteczności publicznej',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Jolanta Kwilman – Pracownia Architektury Wnętrz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jolanta Kwilman – Pracownia Architektury Wnętrz',
    description: 'Pracownia Architektury Wnętrz - projektowanie i aranżacja wnętrz prywatnych i użyteczności publicznej',
    images: ['/opengraph-image.png'],
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
  alternates: {
    canonical: 'https://kwilman.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://kwilman.com',
    name: 'Jolanta Kwilman – Pracownia Architektury Wnętrz',
    alternateName: 'Pracownia Architektury Wnętrz Jolanta Kwilman',
    url: 'https://kwilman.com',
    logo: 'https://kwilman.com/icon.svg',
    description: 'Pracownia Architektury Wnętrz - projektowanie i aranżacja wnętrz prywatnych i użyteczności publicznej w Warszawie i okolicach',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PL',
      addressLocality: 'Warszawa',
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: 'PL',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        addressCountry: 'PL',
      },
    },
    founder: {
      '@type': 'Person',
      name: 'Jolanta Kwilman',
    },
    priceRange: '$$',
    knowsAbout: [
      'architektura wnętrz',
      'projektowanie wnętrz',
      'aranżacja wnętrz',
      'projekty mieszkań',
      'projekty domów',
      'wnętrza użyteczności publicznej',
    ],
  };

  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <div id="wrapper" className="min-h-screen flex flex-col bg-[#f7f7f7]">
          <Header />
          <main className="flex-1">
            <div className="container-inner mx-auto px-4 sm:px-6 lg:px-10 max-w-[1080px]">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
