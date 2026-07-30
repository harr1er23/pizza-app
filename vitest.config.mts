import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest-setup.ts"],
    env: {
      NEXT_PUBLIC_API_BASE_URL: "https://juniorsbootcamp.ru/api",
    },
  },
});
