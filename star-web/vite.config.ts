import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']]
      },
    }),
    tailwindcss(),
  ],
  base: '/Test-Tecnico/', // 👈 nome exato do repositório do GitHub
})
