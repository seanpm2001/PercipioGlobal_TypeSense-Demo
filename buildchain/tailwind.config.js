module.exports = {
    content: [
        '../src/templates/**/*.{twig,html}',
        '../src/vue/**/*.{vue,js}',
    ],
    safelist: [ ],
    theme: {

        container: {
            padding: {
                DEFAULT: '1.5rem',
            },
        },

        extend: {
            colors: {
                'metaseed-blue': {
                    500: '#0052FF',
                    600: '#2563eb',
                    700: '#1D4ED8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                },
                'metaseed-pink': {
                    500: '#EC4899'
                }
            },
            fontFamily: {
                primary: [
                    'Red Hat Text',
                    'sans-serif'
                ],
                mono: [
                    'Source Code Pro',
                    'monospace'
                ],
            },
            transitionTimingFunction: {
                'ease-navigation': 'cubic-bezier(0.62, 0.47, 0.3, 1)'
            }
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
    ],
};
