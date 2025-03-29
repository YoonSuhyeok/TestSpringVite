import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import java, {createRollupInputConfig} from 'vite-plugin-java'

export default defineConfig({
  plugins: [
    legacy({
      targets: [
        'iOS 12',
        'ie 11',
        'chrome 60',
        'safari 10',
        'firefox 54'
      ],
      polyfills: true,
      modernPolyfills: true,
      additionalLegacyPolyfills: [
        'core-js/modules/es.array.map',
        'core-js/modules/es.map',
        'core-js/modules/es.object.entries',
        'core-js/modules/es.object.from-entries',
        'core-js/modules/es.object.values'
      ]
    }),
    java({
      javaProjectBase: '../',
      publicDirectory: 'public',
      buildDirectory: 'resources',
      input: createRollupInputConfig('src/**/main.ts', 'src'),
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    cors: true
  },
  build: {
    sourcemap: true,
    minify: 'terser', // esbuild 대신 terser 사용
    terserOptions: {
      compress: false,
      mangle: false
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    },
    outDir: '../src/main/resources/static/dist',
    emptyOutDir: true,
  },
});
