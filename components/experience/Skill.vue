<template>
  <button
    :id="'skill-button' + props.skill.name"
    :title="`what is ${props.skill.name}`"
    class="box-border grow  px-4 py-3  bg-gradient-to-r from-violet-200 to-violet-100 text-violet-900 "
  >
    <NuxtLink
      :to="skillInfos[props.skill.name].website"
      target="_blank"
      class="flex h-full items-center justify-center gap-2"
      :title="`what is ${props.skill.name}`"
    >
      <img :title="`${skill.name} logo`" class="h-4 w-auto " :src="`/skillsPictures/${skillInfos[props.skill.name].logo}`" />
      <p class="text-xs font-semibold">{{ skill.name }}</p>
    </NuxtLink>
  </button>
</template>

<script setup lang="ts">
import skillsInfosData from "~/assets/staticData/skillInfos.json";
import type { SkillInfosInterface } from "~/models/interfaces/SkillInfosInterface";
import type { SkillInterface } from "~/models/interfaces/SkillInterface";

const skillInfos = skillsInfosData as SkillInfosInterface;
const props = defineProps<{
  skill: SkillInterface;
}>();
</script>
