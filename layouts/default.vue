<template>
  <div class = "box-border flex flex-col  bg-gradient-to-t from-violet-950 bg-black h-full  xl:px-52">
   <header>
    <Toolbar />
  </header>
    <!-- set as flex to take all the remaining space of app parent div -->
    <main class="flex bg-violet-50-4 xl:rounded-xl h-full ">
    <slot />
  </main>
  </div>
</template>
