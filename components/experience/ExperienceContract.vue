<template>
 <div class="flex gap-2 sm:gap-2 md:gap-6">
  <div class="info">
   <Icon icon="ic:baseline-code" class="text-2xl sm:text-3xl md:text-5xl lg:text-4xl" />
   <Icon icon="ic:outline-handshake" class="text-xl sm:text-2xl md:text-4xl lg:text-3xl" />
  </div>
  <div class="info">
   <p>{{ experience.title }}</p>
   <p>{{ experience.contractType }}</p>
  </div>
 </div>
</template>

<script setup lang="ts">
import {Ref} from "nuxt/dist/app/compat/vue-demi";
import {ExperienceInterface} from "~~/models/interfaces/ExperienceInteface";
import {Icon} from "@iconify/vue";

let experience: Ref<ExperienceInterface> = useState("selectedExperience");
</script>
<style scoped>
.info {
 @apply flex flex-col items-start justify-between gap-1 sm:gap-2 md:gap-3;
}

svg {
 @apply col-span-1 text-red-500;
}
p {
 @apply col-span-7   text-base text-orange-100 sm:text-xl md:text-2xl;
}
</style>
