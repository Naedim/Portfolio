<template>
  <div id="home-page" class="flex flex-col items-center justify-center w-full h-full ">

    <main id = "presentation" class="flex flex-col items-start justify-center gap-5 md:gap-8 lg:gap-12 lg:w-4/6">
      <div>
        <p id="home-page__introduction-first-line" class="text-3xl font-bold text-white md:text-5xl lg:text-6xl ">Hello,
          I'm</p>
        <p title="Damien NOEL" id="home-page__introduction-second-line"
          class="text-5xl font-semibold text-orange-200 md:text-7xl lg:text-8xl">Damien NOEL</p>
      </div>


      <div id="home-page__introduction-third-line"
        class="flex flex-col gap-1 text-2xl font-bold md:gap-3 lg:gap-5 md:text-4xl lg:text-5xl text-slate-300 ">

        <p title="Software engineer"><span class="text-red-500">/$: </span>Software engineer</p>
        <p title="University IT teacher"><span class="text-red-500">&& </span>University IT teacher</p>
        <p title="freelance developer"><span class="text-red-500">&& </span>freelance developer</p>
      </div>
    </main>

    <Footer class = "absolute top-0 right-0" />

  </div>
</template>

<style></style>
