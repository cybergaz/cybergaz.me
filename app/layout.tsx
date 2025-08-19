import type { Metadata } from "next";
import Image from "next/image";
// import { Montserrat, Baloo_2 } from "next/font/google";
import localFont from 'next/font/local'
import "@/app/globals.css";
import { ThemeProvider } from "next-themes"
import Footer from "@/components/footer";
import Header from "@/components/header/header";
import { Analytics } from "@vercel/analytics/next"

import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, SITE_NAME, SITE_KEYWORDS } from "@/lib/constants"
import Preload from "@/components/preload";
import HeroGeometric from "@/components/ui/hero-shapes";

// const montserrat = Baloo_2({
//     subsets: ['latin'],
//     weight: ['400', '500', '600', '700', '800'],
//     variable: '--font-montserrat'
// })

const baloo = localFont({
  src: [
    {
      path: '../public/fonts/BalooRegular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/BalooMedium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/BalooSemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/BalooBold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/BalooExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-baloo'
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`
  },
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  manifest: '/favicon/site.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: '@gaz_guine',
    creator: '@gaz_guine',
  },
  keywords: SITE_KEYWORDS,
  creator: 'cybergaz',
  openGraph: {
    url: SITE_URL,
    type: 'website',
    title: SITE_TITLE,
    siteName: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'en-US',
    images: [
      {
        url: '/favicon/favicon.ico',
        width: 1200,
        height: 630,
        alt: SITE_DESCRIPTION,
        type: 'image/png'
      }
    ]
  },
  icons: {
    icon: '/favicon/favicon.ico',
    // shortcut: '/favicon/favicon-16x16.png', apple: "/favicon/apple-touch-icon.png",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${baloo.className}`} suppressHydrationWarning>
      <body className={""}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem >

          <main className="relative">
            <Image
              width={1600}
              height={600}
              className='fixed select-none -right-[43svw] sm:-right-[45svw] -top-[40svh] sm:-top-[10svh] sm:scale-150 -z-10 brightness-[0.6] blur-md'
              src='/images/docs-right.png'
              alt=''
              priority
            />
            <Image
              width={1500}
              height={600}
              className='fixed select-none -left-[30svw] sm:-left-[25svw] -bottom-[40svh] sm:-bottom-[5svh] sm:scale-150 -z-10 brightness-[0.85] blur-lg'
              src='/images/docs-left.png'
              alt=''
              priority
            />
            {/* <div className="fixed h-screen w-screen bg-background/30 backdrop-blur-[10px] -z-[9]" /> */}

            <Preload>
              <HeroGeometric />
              <Header />
              {children}
              <Analytics />
              <Footer />
            </Preload>

          </main>
        </ThemeProvider>
      </body>
    </html >
  );
}
