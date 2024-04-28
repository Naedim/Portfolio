<template>
  <div id="home-page" class="flex  w-full flex-col items-center justify-between">
    <div id = "home-page__introduction" class="flex self-center flex-col items-start justify-center gap-5">
      <div>
        <p id="home-page__introduction-first-line" class="text-xl font-bold text-violet-400">
          Hello, I'm
        </p>
        <p
          title="Damien NOEL"
          id="home-page__introduction-second-line"
          class="text-3xl font-semibold text-violet-600"
        >
          Damien NOEL
        </p>
      </div>

      <div
        id="home-page__introduction-third-line"
        class="flex flex-col gap-1 text-lg font-bold"
      >
        <p class = "text-violet-400" title="Software engineer"><span class="text-lime-500">/$: </span>Software engineer</p>
        <p class = "text-violet-400" title="University IT teacher"><span class="text-lime-500">&& </span>University IT teacher</p>
        <p class = "text-violet-400" title="freelance developer"><span class="text-lime-500">&& </span>freelance developer</p>
      </div>
    </div>

    <Footer class="h-30 w-full bottom-3 portrait:absolute landscape:pt-10 lg:landscape:absolute lg:landscape:bottom-10" />
  </div>
</template>