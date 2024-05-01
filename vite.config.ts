import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
      resolve: {
        alias: {
            "~api": path.resolve(__dirname, "./src/api"),
            "~constants": path.resolve(__dirname, "./src/constants"),
            "~context": path.resolve(__dirname, "./src/context"),
            "~hooks": path.resolve(__dirname, "./src/hooks"),
            "~pages": path.resolve(__dirname, "./src/pages"),
            "~utils": path.resolve(__dirname, "./src/utils"),
            "~components": path.resolve(__dirname, "./src/components"),
        },
    },
})
