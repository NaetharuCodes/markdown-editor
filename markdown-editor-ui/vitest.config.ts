import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setupTests.ts",
    reporters: ["verbose"],
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});