// Import the `defineConfig` function
import { defineConfig } from 'vite';
// Import the `react` plugin
import react from '@vitejs/plugin-react';

// Export the configuration object
export default defineConfig({
  plugins: [react()],
  root: 'src',
});
