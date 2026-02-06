/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                slate: {
                    900: '#0F172A', // Primary Deep Navy
                    800: '#1E293B', // Card BG
                    50: '#F8FAFC', // Text Light
                },
                gold: {
                    500: '#CA8A04', // Primary Accent
                    400: '#EAB308', // Hover Accent
                },
            },
            fontFamily: {
                sans: ['DM Sans', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
