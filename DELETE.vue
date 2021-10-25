<template>
  <div>
    <NuxtLink to="/">
      Home
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
    

    <NuxtPage />
  </div>
</template>