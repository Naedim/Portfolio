<template>
  <div id="experience-description" class="flex flex-col items-center gap-2">
    <div class="flex w-full justify-between lg:justify-center gap-2 sm:gap-2 md:gap-6 lg:gap-60">
      <div class="info">
        <Icon aria-label="job info" name="ic:baseline-code" class="text-xl sm:text-2xl md:text-5xl lg:text-4xl" />
        <p>{{ experience.title }}</p>
      </div>
      <div class="info">
        <Icon aria-label="contract type" name="ic:outline-handshake" class="text-xl sm:text-2xl md:text-4xl lg:text-3xl" />
        <p>{{ experience.contractType }}</p>
      </div>
    </div>
    <p class="text-left text-xs sm:text-base md:text-2xl lg:pt-5 font-semibold text-gray-200">{{ experience.description }}</p>
  </div>
</template>

<script setup lang="ts">
import {Ref} from "nuxt/dist/app/compat/vue-demi";
import {ExperienceInterface} from "~~/models/interfaces/ExperienceInteface";

let experience: Ref<ExperienceInterface> = useState("selectedExperience");
</script>
<style scoped>
.info {
  @apply flex items-center justify-between text-orange-300 gap-1 md:gap-3;
}

svg {
  @apply col-span-1;
}
.info p {
  @apply col-span-7 text-[9px] font-bold  sm:text-xs md:text-[3vw] lg:text-[1.5vw];
}
</style>
