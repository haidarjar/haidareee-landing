tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['"DM Sans"', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            colors: {
                'bg-beige':      '#f4f0ea',
                'window-header': '#f1f1f1',
                'text-main':     '#333333',
                'text-muted':    '#777777',
                'pastel-pink':   '#FFD1DC',
                'pastel-blue':   '#AEC6CF',
                'pastel-green':  '#B1EED3',
                'pastel-yellow': '#FDFD96',
            },
            animation: {
                'icon-pop': 'pop 0.3s ease-out forwards',
                'wiggle':   'wiggle 1s ease-in-out infinite',
            },
            keyframes: {
                pop: {
                    '0%':   { transform: 'scale(1)' },
                    '50%':  { transform: 'scale(1.2)' },
                    '100%': { transform: 'scale(1.1)' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%':      { transform: 'rotate(3deg)' },
                },
            },
        },
    },
};
