import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
     createHtmlPlugin({
      inject: {
        data: {
          injectScript: `<script defer src="script.js" data-website-id="743b33dc-a536-4703-a28a-5803453c5bbb"></script>`,
        },
      },
    }),
  ],
})
