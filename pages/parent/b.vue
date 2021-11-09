<template>
  <div>
    Manual Layout control
    <NuxtLayout :name="layout">
      Default slot
      <button @click="layout ? layout = null : layout = 'custom'">
        Switch layout
      </button>

      <template #header>
        Header slot
      </template>
    </NuxtLayout>
    <NuxtLink to="/">
      Back to home
    </NuxtLink>
  </div>
</template>

<script lang="ts">
export default {
  layout: false,
  data: () => ({
    layout: 'custom'
  })
}
</script>