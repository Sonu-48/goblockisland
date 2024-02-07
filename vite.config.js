import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Asheville Hillside Hideaway',
        short_name: 'Asheville Hillside',
        theme_color: '#ffffff',
        display: "standalone",
        start_url:'/',
        prefer_related_applications:"true",
        icons: [
            {
                src: '/images/pwa-64x64.png',
                sizes: '64x64',
                type: 'image/png'
            },
            {
                src: '/images/pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: '/images/pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any'
            },
            {
                src: '/images/maskable-icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable'
            }
        ],
      }, 
    })
  ],
});
