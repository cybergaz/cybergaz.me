import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                csm: { max: "957px" },
                cmid: { max: "1177px" },
                sm: { max: "640px" },
            },
            fontFamily: {
                monte: ['var(--font-montserrat)', 'sans-serif'],
                baloo: ['var(--font-baloo)', 'sans-serif'],
            },
            rotate: {
                '360': '360deg',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            animation: {},
            keyframes: {},
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
            }
        }
    },

    plugins: [
        require('tailwindcss-motion'),
        require('tailwindcss-intersect')
    ],
};

export default config;
