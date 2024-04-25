<template>
   <header>
    <Toolbar />
  </header>
  <div class = "box-border flex min-h-full w-screen flex-col xl:px-52">
    <!-- set as flex to take all the remaining space of app parent div -->
    <main class="flex bg-white py-4 xl:rounded-xl">
    <slot />
  </main>
  </div>
</template>
