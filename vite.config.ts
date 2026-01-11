import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import faroUploader from "@grafana/faro-rollup-plugin";
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const apiKey = process.env.GRAFANA_FARO_API_KEY || env.GRAFANA_FARO_API_KEY;
  return {
    base: "/",
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      faroUploader({
        appName: "GuideHero",
        endpoint: "https://faro-api-prod-eu-west-2.grafana.net/faro/api/v1",
        appId: "4365",
        stackId: "1266807",
        verbose: true,
        apiKey: apiKey,
        gzipContents: true,
      }),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
        manifest: {
          name: 'GuideHero - Catania Tour',
          short_name: 'GuideHero',
          description: 'Interactive GPS Walking Tour of Catania',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          display: 'standalone',
          orientation: 'portrait',
          start_url: '/',
          icons: [
            {
              src: 'android-icon-36x36.png',
              sizes: '36x36',
              type: 'image/png'
            },
            {
              src: 'android-icon-48x48.png',
              sizes: '48x48',
              type: 'image/png'
            },
            {
              src: 'android-icon-72x72.png',
              sizes: '72x72',
              type: 'image/png'
            },
            {
              src: 'android-icon-96x96.png',
              sizes: '96x96',
              type: 'image/png'
            },
            {
              src: 'android-icon-144x144.png',
              sizes: '144x144',
              type: 'image/png'
            },
            {
              src: 'android-icon-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'ms-icon-310x310.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      })
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
