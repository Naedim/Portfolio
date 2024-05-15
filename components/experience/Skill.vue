<template>
    <NuxtLink
      :to="skillInfos[props.skill.name].website"
      target="_blank"
      :title="`what is ${props.skill.name}`"
    >
  <button
    :id="'skill-button' + props.skill.name"
    :title="`what is ${props.skill.name}`"
    class="flex items-center gap-2 box-border grow  px-4 py-3  max-w-48 bg-gradient-to-r from-violet-200 to-violet-100 text-violet-900 "
  >
      <img :title="`${skill.name} logo`" class="h-4 lg:h-5 w-auto " :src="`/skillsPictures/${skillInfos[props.skill.name].logo}`" />
      <p class="text-xs xl:text-base font-semibold">{{ skill.name }}</p>
  </button>
    </NuxtLink>
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
