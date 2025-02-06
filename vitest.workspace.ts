import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  "./vitest.config.ts",
  "./packages/play/vite.config.ts",
  "./packages/core/build/vite.umd.config.ts",
  "./packages/core/build/vite.es.config.ts"
])
