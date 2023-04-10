<template>
  <button
    :title="`what is ${props.skill.name}`"
    class=" h-8 box-border min-w-[4rem] grow p-1 sm:h-12 sm:p-2 md:h-20 md:max-w-[30rem] md:min-w-[18rem] md:p-3 lg:h-13 lg:min-w-[15rem] lg:max-w-[20rem]"
  >
    <NuxtLink
      :to="skillInfos[props.skill.name].website"
      target="_blank"
      class="flex items-center justify-center gap-2 h-full rounded-full bg-slate-200 md:gap-4 sm:gap-x-3"
      :title="`what is ${props.skill.name}`"
    >
      <img :title="skill.name" class="h-4 sm:h-6 md:h-9" :src="`/skillsPictures/${skillInfos[props.skill.name].logo}`" />
      <h5 class="text-xs font-semibold text-neutral-700 sm:text-sm md:text-2xl">{{ skill.name }}</h5>
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
