<template>
  <div class="experiences-page">
    <div
      class="experience-page__experience"
      v-for="experience of experienceList"
    >
      <div class="experiences-page__selected-experience">
        <h2>
          {{ experience.begining }}
        </h2>
      </div>
      <Experience :experience="experience" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ExperienceInterface} from "@/models/interfaces/ExperienceInteface";
import Experience from "@/components/Experience.vue";
/**
 * Informations about professionnal experiences, duration in months
 */


let experienceList: Array<ExperienceInterface> = [];

experienceList.push({
  company: {
    name: "Capgemini",
    website: "https://www.capgemini.com/",
  },
  contractType: "work-study program",
  begining: "August 2021",
  duration: 12,
  title: "FullStack developer",
  description: "",

  Skillsetlist: [
    {
      description: "client development",
      skillList: [
        {
          name: "angular",
          logoIsLocal: false,
          logo: "vscode-icons:file-type-angular",
        },
        {
          name: "typescript",
          logoIsLocal: false,
          logo: "vscode-icons:file-type-typescript-official",
        },
      ],
    },
    {
      description: "API development",
      skillList: [
        {
          name: "C#",
          logoIsLocal: false,
          logo: "vscode-icons:file-type-csharp",
        },
        {
          name: "java",
          logoIsLocal: false,
          logo: "vscode-icons:file-type-java",
        },
      ],
    },

    {
      description: "data processing",
      skillList: [
        {
          name: "python",
          logoIsLocal: false,
          logo: "vscode-icons:file-type-python",
        },
        {
          name: "java",
          logoIsLocal: false,
          logo: "vscode-icons:file-type-java",
        },
      ],
    },
  ],
});
</script>
<style scoped lang="scss">
$secondary-color: #d81264;
$third-color: #ccd6f6;
$fourth-color: #6b7dad;

.experiences-page {
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.experience-page__experience {
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .experiences-page__selected-experience {
    width: 100%;
    height: 10%;

    h2 {
      text-align: center;
      font-size: clamp(2rem, 3vw, 2.5rem);
      color: white;
      font-weight: 500;
    }
  }
}
</style>

// { // company: { // name: "Koust", // website: "http,s://www.capgemini.com/",
// }, // contractType: "Business internship", // begining: "August 2021", //
duration: 12, // title: "Web/mobile developer", // description: "", // }, // {
// company: { // name: "Intia", // website: "http,s://www.capgemini.com/", // },
// contractType: "Business internship", // begining: "August 2021", // duration:
12, // title: "Web/mobile developer", // description: "", // }, // { // company:
{ // name: "Intia", // website: "http,s://www.capgemini.com/", // }, //
contractType: "Business internship", // begining: "August 2021", // duration:
12, // title: "Web/mobile developer", // description: "", // }, // { // company:
{ // name: "Intia", // website: "http,s://www.capgemini.com/", // }, //
contractType: "Business internship", // begining: "August 2021", // duration:
12, // title: "Web/mobile developer", // description: "", // }
