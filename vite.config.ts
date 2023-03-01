import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import fs from 'fs'




// https://vitejs.dev/config/
export default defineConfig(({ command, mode })=> {
  const env = loadEnv(mode, process.cwd(), '')
  
  const https = env.VITE_USE_SSL == '1' 
    ? {
      key: fs.readFileSync('./backend/cert/localhost.key'),
      cert: fs.readFileSync('./backend/cert/localhost.crt'),
    }: undefined

  return {
    server: {
      https
    },
    plugins: [
      vue({
        template: { transformAssetUrls }
      }),

      quasar({
        sassVariables: 'src/quasar-variables.sass'
      })
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
