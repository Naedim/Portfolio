<template>
  <div class="experiences-page">
    <div
      class="experience-page__experience"
      v-for="experience of experienceList"
    >
      <h1 class="experiences-page__experience-year">
        {{ experience.begining }}
      </h1>

      <div class="experience-page__experience-content">
        <h2 class="experiences-page__experience-title">
          {{ experience.title }}
        </h2>
        <p class="experiences-page__experience-content-description">
          {{ experience.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";

/**
 * Informations about professionnal experiences, duration in months
 */

interface Company {
  name: string;
  website: string;
}
interface Experience {
  company: Company;
  contractType: "work-study program" | "Business internship";
  begining: string;
  duration: number;
  title: string;
  description: string;
}

let experienceList: Array<Experience> = [];

experienceList.push({
  company: {
    name: "capgemini",
    website: "https://www.capgemini.com/",
  },
  contractType: "work-study program",
  begining: "August 2021",
  duration: 12,
  title: "FullStack developer",
  description: "",
});

// let selectedExperience: Ref<Company> = ref(experienceList[0]);
// let selectCompany = (index: number) => {
//   console.log(index);
//   selectedCompany.value = companies[index];

//   console.log(selectedCompany);
// };

// console.log(companies);
</script>
<style scoped lang="scss">
$secondary-color: #d81264;
$third-color: #ccd6f6;
$fourth-color: #6b7dad;

.experiences-page {
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
.experience-page__experience {
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1.experiences-page__experience-year {
    width: 100%;
    height: 15%;
    text-align: center;
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    color: white;
    font-weight: 500;
  }

  .experience-page__experience-content {
    margin-top: 2%;

    box-sizing: border-box;
    width: 90%;
    border-color: $secondary-color;
    border-style: solid;
    border-width: 3px;
    border-radius: 40px;

    padding: 4%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    flex-direction: column;

    h2.experiences-page__experience-title {
      color: $secondary-color;
      flex-grow: 1;
      font-size: clamp(1.25rem, 3vw, 2.5rem);
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
