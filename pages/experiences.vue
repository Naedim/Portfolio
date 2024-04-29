<template>
  <div id="experience-page" class="items-center w-full h-full box-content">
    <div class = "flex flex-col self-center items-center">
      <ExperienceSelector/>
      <Separator class = "pt-12" :title="'Description'"/>
      <ExperienceDescription class = "pt-6"/>
      <Separator class = "pt-6" :title="'technologies'"/>
      <ExperienceSkills class = "pt-6"/>
    </div>
  </div>
</template>
