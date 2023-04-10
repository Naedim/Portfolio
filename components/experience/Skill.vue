<template>
  <button
    class="min-w-20 sm:min-w-25 md:min-w-30 lg:max-w-[15rem] p-y-1 box-border flex h-6 grow items-center justify-center gap-2 rounded-full 
    bg-slate-200 p-1 sm:gap-3 sm:p-2 md:h-14 md:gap-4 md:p-3 lg:h-12"
  >
    <img :title="skill.name" class="h-full" :src="logoPath" />
    <h5 class="text-xs font-semibold text-neutral-700 sm:text-sm md:text-2xl">{{ skill.name }}</h5>
  </button>
</template>

<script setup lang="ts">
import {SkillInterface} from "~~/models/interfaces/SkillInterface";
const props = defineProps<{
  skill: SkillInterface;
}>();

const logoPath = `/skillsPictures/${props.skill.logo}`;


</script>
