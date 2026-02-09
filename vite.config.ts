import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  // When deploying to GitHub Pages for a project site (https://<user>.github.io/<repo>/)
  // we must set the `base` so built asset URLs include the repository name.
  base: '/',
  plugins: [react(), tailwindcss()],

})
