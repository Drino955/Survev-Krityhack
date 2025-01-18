import { defineConfig } from 'vite';
import { metadata } from './src/metadata.js';
import banner from 'vite-plugin-banner'


export default defineConfig({
    build: {
        minify: false,
        target: 'esnext',
        rollupOptions: {
          input: {
            main: 'src/init.js'
          },
          output: {
            dir: 'dist',
            entryFileNames: 'krityhack.user.js',
            format: 'iife',
          },
        },
    },
    plugins: [
        banner({
            verify: false,
            content: metadata,
        })
    ],
});
