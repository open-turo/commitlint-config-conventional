import turoConfig from "@open-turo/eslint-config-typescript";
import { defineConfig } from "eslint/config";

// eslint-disable-next-line import/no-default-export
export default defineConfig([
  turoConfig({
    allowModules: ["@open-turo/eslint-config-typescript", "eslint"],
    ignores: ["pack", "node_modules"],
    typescript: false,
  }),
]);
