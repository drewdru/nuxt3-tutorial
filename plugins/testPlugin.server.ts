import { defineNuxtPlugin, useState } from '#app'

export default defineNuxtPlugin((nuxtApp: any) => {
  const testPluginState = useState('testPluginState')
  testPluginState.value = nuxtApp.ssrContext.req.headers['accept-language']?.split(',')[0]
})