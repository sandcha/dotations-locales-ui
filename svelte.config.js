import node from "@sveltejs/adapter-node"
import preprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: node({
      precompress: true,
    }),

    vite: {
      build: {
        // Size of chunks increased to 3 MB, to be able to import JSON files (reduce ?).
        chunkSizeWarningLimit: 3072,
      },

      ssr: {
        noExternal: ["d3-scale"],
      },
    },
  },

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({}),
  ],
}

export default config
