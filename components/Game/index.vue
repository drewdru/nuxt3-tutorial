<template>
  <div>
    <!-- TODO: nuxt3-3.0.0-27252999.d2cc9e4 [Vue warn]: Failed to resolve component: client-only -->
    <div :id="gameContainerId" ref="gameContainer"/>
    <div class="placeholder" v-if="isGameLoading">
      Loading ...
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
let gameContainer = ref(null)
// TODO: Destroy component on unmounted to fix bug or try to use client-only:
// phaser create canvas outside game сontainer
let gameContainerId = 'gameContainerId'

let isGameLoading = true
let gameInstance: any = null
let game: any

onMounted(async () => {
  if (game === undefined) {
    isGameLoading = false
    game = await import('./game/game')
    launchGame()
  }
})

onUnmounted(() => {
  gameInstance.destroy(true)
})

const launchGame = (count = 10) => {
  // Sometimes in server rendered pages $refs inside <client-only>
  // might not be ready even with $nextTick, the trick might be to call
  // $nextTick a couple of times:
  nextTick(() => {
    if (gameContainer) {
      gameInstance = game.launch(gameContainerId)
      isGameLoading = false
    } else if (count > 0) {
      launchGame(count - 1);
    } else if (count == 0) {
      setTimeout(() => launchGame(count - 1), 5000)
    } else {
      console.error("can't initialize game!!!")
    }
  });
}
</script>