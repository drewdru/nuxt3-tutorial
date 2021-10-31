<template>
  <div class="nav-bar">
    <NuxtLink to="/">
      Home
    </NuxtLink>
    <NuxtLink to="/game">
      Game
    </NuxtLink>
    <NuxtLink to="/about">
      About
    </NuxtLink>
    <NuxtLink to="/parent">
      Parent (index)
    </NuxtLink>
    <NuxtLink to="/parent/b">
      Parent (b)
    </NuxtLink>
    <NuxtLink to="/catchall/test/id/1">
      Test catchall
    </NuxtLink>
  </div>
</template>

<style lang="less">
.nav-bar {
  background-color: red;
}
</style>