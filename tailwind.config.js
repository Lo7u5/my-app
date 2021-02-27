module.exports = {
    purge: ['./src/**/*.{js,jsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                myGray: {
                    snowCloud: '#f1f1f2',
                    warmGray: '#bcbabe',
                    lightIce: '#a1d6e2',
                    darkIce: '#1995ad'
                },
            },
            boxShadow: {
                myBoxShadow: '-2px 3px 4px rgba(0, 0, 0, 0.2)'
            }
        },
    },
    variants: {
        extend: {
            translate: ['active']
        },
    },
    plugins: [],
}