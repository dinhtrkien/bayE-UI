import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path, { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@src': path.resolve(__dirname, 'src'), // Add this line
      '@apis': path.resolve(__dirname, 'src/apis'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@containers': path.resolve(__dirname, 'src/containers')
    },  },
  server: {
    fs: {
      cachedChecks: false
    }
  },

})
