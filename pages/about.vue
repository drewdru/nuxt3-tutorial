<template>
  <div>
    About
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
const { data, refresh, pending } = await useAsyncData('/api/hello', () => $fetch('/api/helloworld'))
// TODO: check why doesn't work this:
// const { data, refresh, pending } = await useFetch('/api/hello')
// const { data: mountain } = await useFetch('/api/mountains/everest', { pick: ['title', 'description'] })
</script>