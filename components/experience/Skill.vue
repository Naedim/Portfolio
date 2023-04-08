<template>
  <div class="flex h-10 flex-col w-20 items-center justify-end">
    <img class="h-2/5 w-2/5" :src="`/assets/skillsPictures/${props.skill.logo}`" />
    <h5 class="text-xs font-medium text-black">{{ skill.name }}</h5>
  </div>
</template>

<script setup lang="ts">
import path from "path";
import {SkillInterface} from "~~/models/interfaces/SkillInterface";

const props = defineProps<{
  skill: SkillInterface;
}>();
</script>
