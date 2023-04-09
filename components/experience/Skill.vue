<template>
  <button class="flex min-w-20 rounded-full grow gap-2 p-1 sm:p-2 bg-slate-200 justify-center items-center ">
    <img :title = "skill.name" class="h-5" :src="`/assets/skillsPictures/${props.skill.logo}`" />
    <h5 class="text-xs sm:text-sm font-semibold text-black">{{ skill.name }}</h5>
  </button>
</template>

<script setup lang="ts">
import {SkillInterface} from "~~/models/interfaces/SkillInterface";

const props = defineProps<{
  skill: SkillInterface;
}>();
</script>
