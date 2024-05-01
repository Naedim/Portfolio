<template>
  <div id="experience-description" class="flex flex-col w-full gap-2">
    <div class="flex w-full justify-center gap-2  xl:gap-32">
      <div class="info">
        <Icon aria-label="job info" name="ic:baseline-code" class="text-2xl" />
        <p>{{ experience.title }}</p>
      </div>
      <div class="info">
        <Icon aria-label="contract type" name="ic:outline-handshake" class="text-2xl" />
        <p>{{ experience.contractType }}</p>
      </div>
    </div>
    <p class="text-sm xl:text-lg text-white  text-center text-pretty font-bold">{{ experience.description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { ExperienceInterface } from '~/models/interfaces/ExperienceInterface';



let experience: Ref<ExperienceInterface> = useState("selectedExperience");
</script>
<style scoped>
.info {
  /* @apply flex items-center justify-between text-violet-600 bg-white rounded-full  font-bold px-2 py-1  xl:px-4 xl:py-3 gap-1 xl:gap-4; */
  @apply flex items-center justify-between text-violet-600 font-bold px-2 py-1  xl:px-4 xl:py-3 gap-1 xl:gap-4;
  
}

svg {
  @apply col-span-1;
}
.info p {
  @apply   text-xs xl:text-base;
}
</style>