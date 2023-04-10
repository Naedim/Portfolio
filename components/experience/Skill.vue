<template>
  <button :title = "props.skill.name"
    class=" min-w-[4rem] sm:min-w-25 md:min-w-30 lg:min-w-[10rem] md:max-w-[30rem] lg:max-w-[14rem] p-y-1 box-border flex h-6 sm:h-10 grow items-center justify-center gap-2 rounded-full 
    bg-slate-200 p-1 sm:gap-3 sm:p-2 md:h-14 md:gap-4 md:p-3 lg:h-12"
  >
    <img :title="skill.name" class="h-full" :src= "`/skillsPictures/${props.skill.logo}`"/>
    <h5 class="text-xs font-semibold text-neutral-700 sm:text-sm md:text-2xl">{{ skill.name }}</h5>
  </button>
</template>

<script setup lang="ts">
import {SkillInterface} from "~~/models/interfaces/SkillInterface";
const props = defineProps<{
  skill: SkillInterface;
}>();
</script>
