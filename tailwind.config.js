module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Change 'purge' to 'content'
    darkMode: 'media', // or remove this line entirely
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
