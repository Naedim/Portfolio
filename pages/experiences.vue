<template>
  <div id="experience-page" class="items-center w-full xl:w-1/2 m-auto h-full box-content">
      <ExperienceSelector/>
      <Separator class = "pt-12 xl:pt-16" :title="'Description'"/>
      <ExperienceDescription class = "pt-6 xl:pt-10"/>
      <Separator class = "pt-6 xl:pt-10" :title="'technologies'"/>
      <ExperienceSkills class = "pt-6 xl:pt-10"/>
  </div>
</template>
