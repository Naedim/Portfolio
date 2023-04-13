<template>
  <div id="experience-page" class="flex self-center flex-col  items-center pt-12 sm:gap-14 gap-12 md:pt-28 md:gap-28">
    <ExperienceSelector class="flex " />
    <ExperienceDescription class="flex basis-1/12" />
    <ExperienceSkills />
  </div>
</template>
<script setup lang="ts">
import {Ref} from "vue";
import {ExperienceInterface} from "~~/models/interfaces/ExperienceInteface";
const experience: Ref<ExperienceInterface> = useState("selectedExperience");
const selectedDomainIndex = ref(0);
</script>

<style scoped></style>