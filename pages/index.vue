<template>
  <div id="home-page" class="flex h-full gap-28 pt-28 sm:gap-36 sm:pt-36 md:gap-48 md:pt-48 w-full flex-col items-center justify-center">
    <div id = "home-page__introduction" class="flex h-full  flex-col items-start justify-center gap-5 md:gap-8 lg:w-4/6 lg:gap-10">
      <div>
        <p id="home-page__introduction-first-line" class="text-xl font-bold text-white sm:text-3xl md:text-5xl lg:text-4xl">
          Hello, I'm
        </p>
        <p
          title="Damien NOEL"
          id="home-page__introduction-second-line"
          class="text-3xl font-semibold text-orange-200 sm:text-5xl md:text-7xl lg:text-6xl"
        >
          Damien NOEL
        </p>
      </div>

      <div
        id="home-page__introduction-third-line"
        class="flex flex-col gap-1 text-lg font-bold text-white sm:text-2xl md:gap-3 md:text-4xl lg:gap-3 lg:text-4xl xl:text-5xl"
      >
        <p title="Software engineer"><span class="text-red-500">/$: </span>Software engineer</p>
        <p title="University IT teacher"><span class="text-red-500">&& </span>University IT teacher</p>
        <p title="freelance developer"><span class="text-red-500">&& </span>freelance developer</p>
      </div>
    </div>

    <Footer class="h-30 portrait:absolute portrait:bottom-0  w-full lg:hidden" />
    <Footer class="absolute right-0 top-0 hidden h-full w-40 flex-col lg:flex" />
  </div>
</template>