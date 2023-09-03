import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Specify the entry point for your application
      input: "src/main.jsx", // Adjust this path to match your actual entry file
    },
  },
});
