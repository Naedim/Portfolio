<template>
  <div id="experience-description" class="flex flex-col w-full gap-2">
    <div class="flex w-full justify-between gap-2 sm:gap-2 md:gap-6 lg:gap-60">
      <div class="info">
        <Icon aria-label="job info" name="ic:baseline-code" class="text-xl" />
        <p>{{ experience.title }}</p>
      </div>
      <div class="info">
        <Icon aria-label="contract type" name="ic:outline-handshake" class="text-xl" />
        <p>{{ experience.contractType }}</p>
      </div>
    </div>
    <p class="text-sm  text-white font-bold">{{ experience.description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { ExperienceInterface } from '~/models/interfaces/ExperienceInterface';



let experience: Ref<ExperienceInterface> = useState("selectedExperience");
</script>
<style scoped>
.info {
  @apply flex items-center justify-between text-violet-900 bg-violet-200 rounded-full  font-bold px-2 py-1 gap-1 md:gap-3;
  
}

svg {
  @apply col-span-1;
}
.info p {
  @apply   text-xs;
}
</style>