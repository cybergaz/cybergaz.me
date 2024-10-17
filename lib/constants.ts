export const isProduction = process.env.NODE_ENV === 'production'

export const SITE_URL = isProduction ? 'https://github.com/cybergaz/portfolio' : 'http://localhost:3001'
export const SITE_NAME = 'Gaz'
export const SITE_TITLE = 'Krishan Kant | Software Developer'
export const SITE_DESCRIPTION = 'Krishan Kant • Software Developer • Open-Source Enthusiast'
export const SITE_KEYWORDS = ['cybergaz', 'gaz', 'portfolio', 'about cybergaz', 'Next.js', 'React', 'TypeScript', 'Node.js']

export const GITHUB_URL = 'https://github.com/cybergaz'
export const INSTAGRAM_URL = 'https://www.instagram.com/cyber_gaz'
export const X_URL = 'https://x.com/gaz_guine'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/krishna-kant-bb372b212'

export const NAVLINKS = [
    { title: "Home", href: "home" },
    { title: "About", href: "about" },
    { title: "Projects", href: "projects" },
    { title: "Contact", href: "contact" },
]
