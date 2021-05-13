module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                cyan: {
                    DEFAULT: "hsl(var(--cyan))",
                    dark: "hsl(var(--cyan-dark))",
                },
                gray: {
                    dark: "hsl(var(--dark-gray))",
                },
                "icon-bookmark": {
                    bg: "#2F2F2F",
                    icon: "#B1B1B1",
                },
            },
            fontFamily: {
                comissioner: ["Commissioner", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
