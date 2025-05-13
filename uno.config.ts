import { defineConfig, presetAttributify, presetWind4 } from 'unocss'

export default defineConfig({
    presets: [
        presetAttributify({ /* preset options */}),
        presetWind4(),
        // ...custom presets
    ],
})