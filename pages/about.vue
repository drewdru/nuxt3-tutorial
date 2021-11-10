
<i18n src="./about_en.json"></i18n>
<i18n src="./about_ru.json"></i18n>

<template>
  <div>
    {{t('About')}}
    <button @click="locale='ru'">ru</button>
    <button @click="locale='en'">en</button>
    <div>
      {{ data }}
      <button :disabled="pending" @click="refresh">
        Refrash Data
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  head: {
    title: 'Static title'
  }
}
</script>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

const { data, refresh, pending } = await useAsyncData('/api/hello', () => $fetch('/api/helloworld'))
// TODO: check why doesn't work this:
// const { data, refresh, pending } = await useFetch('/api/hello')
// const { data: mountain } = await useFetch('/api/mountains/everest', { pick: ['title', 'description'] })
</script>