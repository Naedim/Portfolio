<template>
  <button class="flex h-10 flex-col w-20 rounded-full grow bg-slate-50 justify-center items-center ">
    <img :title = "skill.name" class="h-2/5 w-2/5" :src="`/assets/skillsPictures/${props.skill.logo}`" />
    <h5 class="text-xs font-semibold text-black">{{ skill.name }}</h5>
  </button>
</template>

<script setup lang="ts">
import {SkillInterface} from "~~/models/interfaces/SkillInterface";

const props = defineProps<{
  skill: SkillInterface;
}>();
</script>
