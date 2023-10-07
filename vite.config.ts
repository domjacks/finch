import { defineConfig } from 'vite';
import { resolve } from 'path'
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		lib: {
			// Could also be a dictionary or array of multiple entry points
			entry: resolve(__dirname, 'src/main.ts'),
			name: 'Finch',
			// the proper extensions will be added
			fileName: 'finch',
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ['preact'],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					preact: 'Preact',
				},
			},
		},
	}
});
