import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const base = "/";

  return defineConfig({
    plugins: [],
    base,
    server: {
      host: true,
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
        },
        plugins: [visualizer()],
      },
    },
  });
};
