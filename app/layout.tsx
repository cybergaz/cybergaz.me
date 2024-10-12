import type { Metadata } from "next";
import Image from "next/image";
import { Inter, Quicksand, Poppins } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, SITE_NAME, SITE_KEYWORDS } from "@/lib/constants"

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-poppins'
})
const quicksand = Quicksand({ subsets: ["latin"], weight: ["500"], });

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
        <html lang="en" className={poppins.className} suppressHydrationWarning>
            <body className="">
                <ThemeProvider>
                    <main className="px-1 relative">
                        <Image
                            width={1400}
                            height={500}
                            className='absolute left-1/2 top-0 -z-10 -translate-x-1/2'
                            src='/images/gradient-background-top.png'
                            alt=''
                            role='presentation'
                            priority
                        />
                        <Header />
                        {children}
                        <Footer />
                        <Image
                            width={1312}
                            height={447}
                            className='absolute -bottom-6 left-1/2 -z-10 -translate-x-1/2'
                            src='/images/gradient-background-bottom.png'
                            alt=''
                            role='presentation'
                            priority
                        />
                    </main>
                </ThemeProvider>
            </body>
        </html >
    );
}
