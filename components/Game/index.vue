<template>
  <div :id="containerId" />
  <div class="placeholder" v-if="isGameLoading">
    Loading ...
  </div>
</template>


<script setup>
import { onDeactivated, onMounted } from 'vue'

let isGameLoading = true
let gameInstance = null
let containerId = 'game-container'

onMounted(async () => {
  const game = await import('./game/game')
  isGameLoading = false
  gameInstance = game.launch(containerId)
})

onDeactivated(() => {
  gameInstance.destroy(false)
})
</script>