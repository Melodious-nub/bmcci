import { resolve } from 'path';
import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

// Custom build-time HTML injection plugin for reusable layouts/components
function htmlInject() {
  return {
    name: 'html-inject',
    transformIndexHtml(html, ctx) {
      let content = html;
      const regex = /<!--\s*include\s+([^\s]+)\s*-->/g;
      let match;
      while ((match = regex.exec(content)) !== null) {
        const filePath = resolve(path.join(process.cwd(), 'src', match[1]));
        if (fs.existsSync(filePath)) {
          const fileContent = fs.readFileSync(filePath, 'utf-8');
          content = content.replace(match[0], fileContent);
        } else {
          console.warn(`[html-inject] Injection failed. File not found: ${filePath}`);
          content = content.replace(match[0], `<!-- Missing component: ${match[1]} -->`);
        }
      }
      return content;
    }
  };
}

export default defineConfig({
  root: 'src',
  plugins: [htmlInject()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/pages/about.html'),
        trade: resolve(__dirname, 'src/pages/trade.html'),
        economy: resolve(__dirname, 'src/pages/economic-intelligence.html'),
        events: resolve(__dirname, 'src/pages/events.html'),
        directory: resolve(__dirname, 'src/pages/business-directory.html'),
        membership: resolve(__dirname, 'src/pages/membership.html'),
        discover: resolve(__dirname, 'src/pages/discover.html'),
        news: resolve(__dirname, 'src/pages/news.html'),
        contact: resolve(__dirname, 'src/pages/contact.html'),
        notFound: resolve(__dirname, 'src/pages/404.html'),
      }
    }
  }
});
