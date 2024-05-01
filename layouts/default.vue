<template>
  <!-- <div class = "box-border flex flex-col  p-4 lg:p-12 bg-gradient-to-b from-violet-400 to-violet-500 h-full"> -->
  <div class = "box-border flex flex-col  p-4 lg:p-12 bg-gradient-to-b from-slate-900 to-black h-full">
  <!-- <div class = "box-border flex flex-col  p-4 lg:p-12 bg-black h-full"> -->
   <header>
    <Toolbar />
  </header>
    <!-- set as flex to take all the remaining space of app parent div -->
    <main class="flex xl:rounded-xl h-full pt-28 ">
    <slot />
  </main>
  </div>
</template>
