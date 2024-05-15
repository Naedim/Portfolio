<template>
  <div id="experience-page" class="items-center w-full xl:w-1/2 m-auto h-full box-content">
      <ExperienceSelector/>
      <Separator class = "pt-12 xl:pt-16" :title="'Description'"/>
      <ExperienceDescription class = "pt-8 xl:pt-12"/>
      <Separator class = "pt-10 xl:pt-14" :title="'technologies'"/>
      <ExperienceSkills class = "pt-12 xl:pt-16"/>
  </div>
</template>
