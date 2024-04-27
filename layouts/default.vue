<template>
  <div class = "box-border flex flex-col  p-4 bg-gradient-to-b from-violet-950 to-black h-full">
   <header>
    <Toolbar />
  </header>
    <!-- set as flex to take all the remaining space of app parent div -->
    <main class="flex xl:rounded-xl h-full pt-28 ">
    <slot />
  </main>
  </div>
</template>
