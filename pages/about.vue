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

<script>
export default {
  head: {
    title: 'Static title'
  }
}
</script>

<script setup>
const { data, refresh, pending } = await useAsyncData('/api/hello', () => $fetch('/api/helloworld'))
</script>