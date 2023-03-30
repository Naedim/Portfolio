<template>
  <div id="home-page" class="flex flex-col items-center justify-center w-full h-full ">

    <main id = "home-page" class="flex flex-col items-start justify-center h-full gap-5 md:gap-8 lg:gap-12 lg:w-4/6">
      <div>
        <p id="home-page__introduction-first-line" class="text-xl font-bold text-white sm:text-3xl md:text-5xl lg:text-7xl">Hello,
          I'm</p>
        <p title="Damien NOEL" id="home-page__introduction-second-line"
          class="text-3xl font-semibold text-orange-200 sm:text-5xl md:text-7xl lg:text-9xl">Damien NOEL</p>
      </div>


      <div id="home-page__introduction-third-line"
        class="flex flex-col gap-1 text-lg font-bold text-white sm:text-2xl md:gap-3 lg:gap-5 md:text-4xl lg:text-6xl ">

        <p title="Software engineer"><span class="text-red-500">/$: </span>Software engineer</p>
        <p title="University IT teacher"><span class="text-red-500">&& </span>University IT teacher</p>
        <p title="freelance developer"><span class="text-red-500">&& </span>freelance developer</p>
      </div>
    </main>

    <Footer class = "bottom-0 w-full h-30 lg:hidden" />
    <Footer class = "absolute top-0 right-0 flex-col hidden w-40 h-full lg:flex" />

  </div>
</template>

<style></style>
