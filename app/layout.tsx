import type { Metadata } from "next";
import Image from "next/image";
// import { Montserrat, Baloo_2 } from "next/font/google";
import localFont from 'next/font/local'
import "@/app/globals.css";
import { ThemeProvider } from "next-themes"
import Footer from "@/components/footer";
import Header from "@/components/header";

import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, SITE_NAME, SITE_KEYWORDS } from "@/lib/constants"

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
    creator: 'cyber_gaz',
    openGraph: {
        url: SITE_URL,
        type: 'website',
        title: SITE_TITLE,
        siteName: SITE_TITLE,
        description: SITE_DESCRIPTION,
        locale: 'en-US',
        images: [
            {
                url: '/images/main.png',
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
                    {/* <AnimatedCursor */}
                    {/*     innerSize={8} */}
                    {/*     outerSize={35} */}
                    {/*     color='100, 100, 220' */}
                    {/*     outerAlpha={0.1} */}
                    {/*     innerScale={2} */}
                    {/*     outerScale={2} */}
                    {/**/}
                    {/* /> */}

                    <main className="relative">
                        <Image
                            width={1600}
                            height={600}
                            className='fixed select-none -right-[44svw] sm:-right-[45svw] -top-[40svh] sm:-top-[10svh] sm:scale-150 -z-10'
                            src='/images/docs-right.png'
                            alt=''
                            role='presentation'
                            priority
                        />
                        <Image
                            width={1500}
                            height={600}
                            className='fixed select-none -left-[30svw] sm:-left-[25svw] -bottom-[40svh] sm:-bottom-[5svh] sm:scale-150 -z-10'
                            src='/images/docs-left.png'
                            alt=''
                            role='presentation'
                            priority
                        />
                        <div className="fixed h-screen w-screen bg-background/30 backdrop-blur-[10px] -z-[9]" />

                        <Header />
                        {children}
                        <Footer />

                    </main>
                </ThemeProvider>
            </body>
        </html >
    );
}
