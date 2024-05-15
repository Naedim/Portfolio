<template>
  <div class = "box-border flex flex-col  p-4 lg:p-8 xl:p-12 bg-gradient-to-b from-slate-900 to-black min-h-full">
   <header>
    <Toolbar />
  </header>
    <main class="flex xl:rounded-xl h-full pt-16 lg:pt-28 ">
    <slot />
  </main>
  </div>
</template>
