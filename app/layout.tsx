import type { Metadata } from "next";
import Image from "next/image";
import { Inter, Noto_Sans, Poppins, Montserrat, Ballet, Parisienne, Tangerine, Petit_Formal_Script, Great_Vibes } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import AnimatedCursor from 'react-animated-cursor';
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, SITE_NAME, SITE_KEYWORDS } from "@/lib/constants"
import { twMerge } from "tailwind-merge"
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ballet = Ballet({
    subsets: ["latin"],
    weight: ['400'],
    variable: '--font-ballet'
});

const tangerine = Tangerine({
    subsets: ["latin"],
    weight: ['400'],
    variable: '--font-tangerine'
});
const gv = Great_Vibes({
    subsets: ["latin"],
    weight: ['400'],
    variable: '--font-gv'
});

const pfs = Petit_Formal_Script({
    subsets: ["latin"],
    weight: ['400'],
    variable: '--font-pfs'
});

const paris = Parisienne({
    subsets: ["latin"],
    weight: ['400'],
    variable: '--font-paris'
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    variable: '--font-poppins'
})

const noto = Noto_Sans({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    variable: '--font-noto'
})

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    variable: '--font-montserrat'
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
        <html lang="en" className={twMerge(clsx(montserrat.variable, paris.variable, ballet.variable, pfs.variable, tangerine.variable, gv.variable))} suppressHydrationWarning>
            <body className={"text-lg"}>
                <ThemeProvider>
                    <AnimatedCursor
                        innerSize={8}
                        outerSize={35}
                        color='100, 100, 220'
                        outerAlpha={0.1}
                        innerScale={2}
                        outerScale={2}

                    />
                    <main className="relative">
                        {/* <Image */}
                        {/*     width={1400} */}
                        {/*     height={500} */}
                        {/*     className='absolute left-1/2 top-0 -z-10 -translate-x-1/2' */}
                        {/*     src='/images/gradient-background-top.png' */}
                        {/*     alt='' */}
                        {/*     role='presentation' */}
                        {/*     priority */}
                        {/* /> */}
                        <Image
                            width={1600}
                            height={600}
                            className='fixed -right-[52rem] -top-96 -z-10'
                            src='/images/docs-right.png'
                            alt=''
                            role='presentation'
                            priority
                        />
                        <Image
                            width={1500}
                            height={600}
                            className='fixed -left-[40rem] -bottom-96 -z-10'
                            src='/images/docs-left.png'
                            alt=''
                            role='presentation'
                            priority
                        />
                        <div className="fixed h-screen w-screen bg-background/30 backdrop-blur-xl -z-[9]" />
                        <Header />
                        {children}
                        <Footer />
                        {/* <Image */}
                        {/*     width={1312} */}
                        {/*     height={447} */}
                        {/*     className='absolute -bottom-6 left-1/2 -z-10 -translate-x-1/2' */}
                        {/*     src='/images/gradient-background-bottom.png' */}
                        {/*     alt='' */}
                        {/*     role='presentation' */}
                        {/*     priority */}
                        {/* /> */}
                    </main>
                </ThemeProvider>
            </body>
        </html >
    );
}
