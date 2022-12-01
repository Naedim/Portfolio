<template>
  <div class="default-layout-container">
    <!-- <div> -->
    <Toolbar />
    <slot />
  </div>
</template>

<style lang="scss">
.default-layout-container {
  display: flex;
  flex-flow: column;
  height: 100vh;
}
</style>
