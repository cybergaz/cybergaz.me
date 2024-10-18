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
                csm: { max: "955px" }
            },
            fontFamily: {
                comfortaa: ['var(--font-comfortaa)', 'sans-serif'],
                monte: ['var(--font-montserrat)', 'sans-serif'],
                inter: ['var(--font-inter)', 'sans-serif'],
                noto: ['var(--font-noto)', 'sans-serif'],
                paris: ['var(--font-paris)', 'cursive'],
                tang: ['var(--font-tangerine)', 'cursive'],
                pfs: ['var(--font-pfs)', 'cursive'],
                gv: ['var(--font-gv)', 'cursive'],
            },
            rotate: {
                '360': '360deg',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            animation: {
                title: "title 3s ease-out forwards",
                fadein: 'fade-in 1s ease-in-out 0.25s 1',
                fadeout: 'fade-out 1s ease-out 0.25s 1',
                zoomin: 'zoom-in 1s ease-in-out 0.25s 1',
                zoomout: 'zoom-out 1s ease-in-out 0.25s 1',
            },
            keyframes: {
                "fade-in": {
                    "0%": {
                        opacity: "0%",
                    },
                    "75%": {
                        opacity: "0%",
                    },
                    "100%": {
                        opacity: "100%",
                    },
                },
                'fade-out': {
                    '0%': {
                        opacity: '1'
                    },
                    '100%': {
                        opacity: '0'
                    }
                },
                'zoom-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'scale3d(0.7, 0.7, 0.7)'
                    },
                    '80%': {
                        opacity: '0.9',
                        transform: 'scale3d(1, 1, 1)'
                    },
                    '100%': {
                        opacity: '1'
                    }
                },
                'zoom-out': {
                    '0%': {
                        opacity: '1'
                    },
                    '15%': {
                        opacity: '0.8',
                        transform: 'scale3d(1.1, 1.1, 1.1)'
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'scale3d(0.3, 0.3, 0.3)'
                    }
                },
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
            }
        }
    },

    plugins: [],
};

export default config;
