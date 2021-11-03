import { defineNuxtPlugin, useState } from '#app'

export default defineNuxtPlugin((nuxtApp: any) => {
  const locale = useState('locale')
  locale.value = nuxtApp.ssrContext.req.headers['accept-language']?.split(',')[0]
})