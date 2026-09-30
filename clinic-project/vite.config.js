import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // إلزامي لـ Capacitor: بدونه الشاشة تطلع سودا فاضية لأن المسارات تصير مطلقة
  plugins: [react()],
  server: {
    port: 5174
  }
})
