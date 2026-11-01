import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
    base: "/Playtest64/",
    plugins: [
        react(),
        babel({ presets: [reactCompilerPreset()] })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    }, 
})
