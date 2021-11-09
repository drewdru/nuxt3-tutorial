import { defineNuxtConfig } from 'nuxt3'
// TODO: i18n broken for nuxt3-3.0.0-27252999.d2cc9e4
// alternative package @intlify/nuxt3@^0.1.6 broken too
export default defineNuxtConfig({
  buildModules: ['@intlify/nuxt3'],
  intlify: {
    vueI18n: {
      locale: 'en',
    }
  },

  nitro: {
    preset: 'server',
  },
})
