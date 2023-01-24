import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'src', // (NOTE: if index.html is in root directory, then this is not needed)
});