@type {import('tailwindcss').Config}

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            primary: 'Nunito',
            secondary: 'Roboto Condensed',
            tertiary: 'Indie Flower',
        },
        container: {
            padding: {
                DEFAULT:'20px',
                lg: '0'
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1300px',
        },
        extend: {
            colors: {
                dark: '#111111', 
                grey: {
                    DEFAULT: '#555555',
                },
            }, 
        },
    },
    plugins: [],
}