import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log(command, mode);
  return {
    base: command === "serve" ? "/" : "/pages/",
    plugins: [react()],
  };
});
