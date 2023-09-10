import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { checker } from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig((data) => ({
  plugins: [react(), tsconfigPaths(), checker({ typescript: true })],
  define: {
    'process.env': {
      ...process.env,
      ...loadEnv(data.mode, process.cwd()),
    },
  },
  server: {
    port: 8080,
  },
  build: { outDir: 'build', minify: false },
}));
