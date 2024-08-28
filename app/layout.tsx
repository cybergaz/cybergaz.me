import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/components/providers";
import { Footer } from "@/app/components/footer";
import Header from "@/app/components/header";
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, SITE_NAME, SITE_KEYWORDS } from "@/lib/constants"

const inter = Inter({ subsets: ["latin"] });

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
        shortcut: '/favicon/favicon-16x16.png',
        apple: "/favicon/apple-touch-icon.png",
    }
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <Providers>
                    <Header />
                    <main className="">
                        {children}
                    </main>
                    <Footer />
                </Providers >
            </body>
        </html>
    );
}
