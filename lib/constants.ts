export const isProduction = process.env.NODE_ENV === 'production'

export const SITE_URL = isProduction ? 'https://github.com/cybergaz/portfolio' : 'http://localhost:3001'
export const SITE_NAME = 'Gaz'
export const SITE_TITLE = 'Krishan Kant | Software Developer'
export const SITE_DESCRIPTION = 'Krishan Kant • Software Developer • Open-Source Enthusiast'
export const SITE_KEYWORDS = ['cybergaz', 'gaz', 'krishan kant', 'portfolio', 'about cybergaz', 'Next.js', 'React', 'TypeScript']

export const LINKS = {
    github: 'https://github.com/cybergaz',
    instagram: 'https://www.instagram.com/cyber_gaz',
    linkedin: 'https://www.linkedin.com/in/cybergaz',
    whatsapp: 'https://wa.me/918534946840',
    telegram: 'https://t.me/cyber_gaz',
    x: 'https://x.com/gaz_guine',
    email: 'mailto:gaz.sync@gmail.com',
    resume: 'https://docs.google.com/document/d/15S-Iosgq6zDaIkpsCFT3Ln--NTU4O3qo/edit?usp=sharing&ouid=114908455304794398126&rtpof=true&sd=true'
}

export const NAVLINKS = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
]
