import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/MerryChrismas/', // <--- 关键修改：使用 /仓库名/
  plugins: [react()],
})
