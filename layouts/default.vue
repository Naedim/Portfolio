<template>
  <header>
    <Toolbar />
  </header>
    <!-- set as flex to take all the remaining space of app parent div -->
    <main class="flex">
    <slot />
  </main>
</template>
