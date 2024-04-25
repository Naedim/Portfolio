<template>
  <div id="home-page" class="flex  w-full pt-28  flex-col items-center justify-between">
    <div id = "home-page__introduction" class="flex self-center flex-col items-start justify-center gap-5 md:gap-8 lg:w-4/6 lg:gap-10">
      <div>
        <p id="home-page__introduction-first-line" class="text-xl font-bold text-black sm:text-3xl md:text-5xl lg:text-4xl">
          Hello, I'm
        </p>
        <p
          title="Damien NOEL"
          id="home-page__introduction-second-line"
          class="text-3xl font-semibold text-orange-500 sm:text-5xl md:text-7xl lg:text-6xl"
        >
          Damien NOEL
        </p>
      </div>

      <div
        id="home-page__introduction-third-line"
        class="flex flex-col gap-1 text-lg font-bold text-black sm:text-2xl md:gap-3 md:text-4xl lg:gap-3 lg:text-4xl xl:text-5xl"
      >
        <p title="Software engineer"><span class="text-purple-500">/$: </span>Software engineer</p>
        <p title="University IT teacher"><span class="text-purple-500">&& </span>University IT teacher</p>
        <p title="freelance developer"><span class="text-purple-500">&& </span>freelance developer</p>
      </div>
    </div>

    <Footer class="h-30 w-full bottom-3 sm:bottom-6 portrait:absolute landscape:pt-10 lg:landscape:absolute lg:landscape:bottom-10" />
  </div>
</template>