<template>
  <button class="flex min-w-20 sm:min-w-25 md:min-w-30 rounded-full grow gap-2 sm:gap-3 md:gap-4 p-1 sm:p-2 md:p-3 bg-slate-200 justify-center items-center ">
    <img :title = "skill.name" class="h-5 md:h-8" :src="`/assets/skillsPictures/${props.skill.logo}`" />
    <h5 class="text-xs sm:text-sm md:text-2xl font-semibold text-neutral-700">{{ skill.name }}</h5>
  </button>
</template>

<script setup lang="ts">
import {SkillInterface} from "~~/models/interfaces/SkillInterface";

const props = defineProps<{
  skill: SkillInterface;
}>();
</script>
