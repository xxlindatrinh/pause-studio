import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer() // https://github.com/postcss/autoprefixer
      ],
    }
  }
})
