<template>
  <div class="experiences-page">
    <div class="experience-page__experience" v-for="experience of experienceList">
      <div class="experiences-page__selected-experience">
        <h1>
          {{ experience.begining }}
        </h1>

        <div class="experiences-page__company-info">
          <h2 class="experience-page__company-name">{{ experience.company.name }}</h2>

          <div class="experience-page__experience-duration">
            <Icon icon="material-symbols:hourglass-bottom" class="hourglass-icon" title="navbar's logo's icon" />

            <h2>{{ experience.duration }} months</h2>

          </div>

        </div>

      </div>
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
import { Icon } from "@iconify/vue";
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
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .experiences-page__selected-experience {
    width: 100%;
    height: 30%;

    h1 {
      text-align: center;
      font-size: clamp(2rem, 3vw, 2.5rem);
      color: white;
      font-weight: 500;
    }

    .experiences-page__company-info {
      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

        h2.experience-page__company-name {
          font-size: clamp(2.5rem, 2.5vw, 2rem);
          color: white;
          font-weight: 500;
        }



      .experience-page__experience-duration {
        display: flex;
        align-items: center;
        justify-content: center;

        h2{
          text-align: center;
        font-size: clamp(1.25rem, 3vw, 2.5rem);
        color : $third-color;
        font-weight: 500;
        }

        .hourglass-icon {
          color: $fourth-color;
          width: 1.5rem;
          font-size: clamp(1.25rem, 3vw, 2.5rem);
        }
      }
    }
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
