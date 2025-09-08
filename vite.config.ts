import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/batiactu/', // Remplacez 'batiactu' par le nom de votre repo GitHub
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
