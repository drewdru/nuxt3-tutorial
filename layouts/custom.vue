<template>
  <div>
    <strong>Custom layout</strong>
    Header slot:
    <slot name="header">
      Default slot content
    </slot>
    <slot />
  </div>
</template>

<script setup>
console.log('custom layout created')
</script>