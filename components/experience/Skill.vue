<template>
  <button
    :id="'skill-button' + props.skill.name"
    :title="`what is ${props.skill.name}`"
    class="lg:h-13 box-border h-8 min-w-[4rem] grow rounded-full bg-slate-200 p-1 sm:h-12 sm:min-w-[6rem] sm:p-2 md:h-12 md:min-w-[30vw] md:p-3 lg:min-w-[15rem] lg:max-w-[30rem]"
  >
    <NuxtLink
      :to="skillInfos[props.skill.name].website"
      target="_blank"
      class="flex h-full items-center justify-center gap-2 sm:gap-x-3 md:gap-4"
      :title="`what is ${props.skill.name}`"
    >
      <img :title="skill.name" class="h-4 w-auto sm:h-6 md:h-9" :src="`/skillsPictures/${skillInfos[props.skill.name].logo}`" />
      <p class="text-xs font-semibold text-neutral-700 sm:text-sm md:text-xl">{{ skill.name }}</p>
    </NuxtLink>
  </button>
</template>

<script setup lang="ts">
import {SkillInterface} from "~~/models/interfaces/SkillInterface";
import {SkillInfosInterface} from "~/models/interfaces/skillInfoInterface";
import skillsInfosData from "~/assets/staticData/skillInfos.json";

const skillInfos = skillsInfosData as SkillInfosInterface;
const props = defineProps<{
  skill: SkillInterface;
}>();
</script>
