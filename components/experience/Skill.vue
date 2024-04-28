<template>
  <button
    :id="'skill-button' + props.skill.name"
    :title="`what is ${props.skill.name}`"
    class="box-border grow rounded-full bg-slate-200 px-6 py-4"
  >
    <NuxtLink
      :to="skillInfos[props.skill.name].website"
      target="_blank"
      class="flex h-full items-center justify-center gap-2 sm:gap-x-3 md:gap-4"
      :title="`what is ${props.skill.name}`"
    >
      <img :title="`${skill.name} logo`" class="h-4 w-auto sm:h-6 md:h-9" :src="`/skillsPictures/${skillInfos[props.skill.name].logo}`" />
      <p class="text-xs font-semibold text-neutral-700 sm:text-sm md:text-xl">{{ skill.name }}</p>
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
