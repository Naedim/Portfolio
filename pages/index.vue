<template>
  <div id="home-page" class="flex w-full flex-col items-center justify-between">
    <div id = "home-page__introduction" class="flex self-center w-3/4 flex-col items-start justify-center gap-5">
      <div>
        <p id="home-page__introduction-first-line" class="text-2xl lg:text-4xl xl:text-5xl font-bold text-violet-600">
          Hello, I'm
        </p>
        <p
          title="Damien NOEL"
          id="home-page__introduction-second-line"
          class="text-4xl lg:text-6xl xl:text-7xl font-semibold text-white"
        >
          Damien NOEL
        </p>
      </div>

      <div
        id="home-page__introduction-third-line"
        class="flex flex-col gap-1 text-xl lg:text-3xl xl:text-4xl font-bold"
      >
        <p class = "text-white" title="Software engineer"><span class="text-violet-600">/$: </span>Software engineer</p>
        <p class = "text-white" title="University IT teacher"><span class="text-violet-600">&& </span>University IT teacher</p>
        <p class = "text-white" title="freelance developer"><span class="text-violet-600">&& </span>freelance developer</p>
      </div>
    </div>

    <Footer class="h-30 w-full bottom-4 lg:bottom-12 portrait:absolute landscape:pt-10 lg:landscape:absolute lg:landscape:bottom-10" />
  </div>
</template>