<template>
  <div id="experience-page" class="flex h-full flex-col items-center">
    <ExperienceSelector class="mt-5 flex basis-1/6 lg:mt-20" />
    <ExperienceContract class="flex basis-1/12" />
    <div class="w-full grow pt-4">
      <div class="flex w-full flex-wrap gap-2">
        <button v-for="domain in experience.skillDomainList" class="box-content h-6 grow  rounded-full bg-slate-200 px-2 focus:bg-orange-200">
          <p class="text-center text-[10px]" @click =" selectedDomain = domain">{{ domain.title }}</p>
        </button>
      </div>
      <div class="w-full bg-slate-200  auto flex mt-5 flex-wrap border-3 p-2 border-red-500 rounded-lg" v-if = "selectedDomain != null">
        <Skill v-for="skill in selectedDomain.skillList" :skill="skill" /> 
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Skill from "~~/components/experience/Skill.vue";
import {Ref} from "vue";
import {ExperienceInterface} from "~~/models/interfaces/ExperienceInteface";
import { SkillDomainInterface } from "~~/models/interfaces/SkillDomainInterface";

const experience: Ref<ExperienceInterface> = useState("selectedExperience");
const selectedDomain : Ref<SkillDomainInterface> = useState("selectedDomain");
</script>

<style scoped></style>

// { // company: { // name: "Koust", // website: "http,s://www.capgemini.com/", // }, // contractType: "Business internship", // begining: "August 2021", //
duration: 12, // title: "Web/mobile developer", // description: "", // }, // { // company: { // name: "Intia", // website: "http,s://www.capgemini.com/", // },
// contractType: "Business internship", // begining: "August 2021", // duration: 12, // title: "Web/mobile developer", // description: "", // }, // { //
company: { // name: "Intia", // website: "http,s://www.capgemini.com/", // }, // contractType: "Business internship", // begining: "August 2021", // duration:
12, // title: "Web/mobile developer", // description: "", // }, // { // company: { // name: "Intia", // website: "http,s://www.capgemini.com/", // }, //
contractType: "Business internship", // begining: "August 2021", // duration: 12, // title: "Web/mobile ", // description: "", // }
