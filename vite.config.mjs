import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// ✅ Use ESM syntax
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
