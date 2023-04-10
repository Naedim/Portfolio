<template>
  <button 
      :title="`what is ${props.skill.name}`" class = " grow transform transition duration-500 hover:scale-120">
    <NuxtLink
      :to="skillInfos[props.skill.name].website"
      target="_blank"
      class="p-y-1 box-border flex h-6 min-w-[4rem] items-center justify-center gap-2 rounded-full bg-slate-200 p-1 sm:h-10 sm:gap-3 sm:p-2 
      md:h-14 md:max-w-[30rem] md:gap-4 md:p-3 lg:h-12 lg:min-w-[15rem] lg:max-w-[20rem]"
      :title="`what is ${props.skill.name}`"
    >
      <img :title="skill.name" class="h-full" :src="`/skillsPictures/${skillInfos[props.skill.name].logo}`" />
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
