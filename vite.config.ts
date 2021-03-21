import path from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

const getPath = (filePath: string) => path.resolve(__dirname, filePath);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: [
      { find: '@', replacement: getPath('src') },
      { find: '@components', replacement: getPath('src/components') },
      { find: '@common', replacement: getPath('src/components/common') },
      { find: '@layout', replacement: getPath('src/components/layout') },
      { find: '@styles', replacement: getPath('src/assets/styles') },
      { find: '@images', replacement: getPath('src/assets/images') },
    ],
  },
});
