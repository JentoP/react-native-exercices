/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.js",
        "./screens/HomeScreen.js"
    ],
    presets: [require('nativewind/presets')],
    theme: {
        extend: {},
    },
    plugins: [],
}