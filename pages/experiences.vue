<template>
  <div class="experiences-page">
    <div
      class="experience-page__experience"
      v-for="experience of experienceList"
    >
      <h1 class="experiences-page__experience-year">
        {{ experience.begining }}
      </h1>
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

experienceList.push(
  {
    company: {
      name: "capgemini",
      website: "https://www.capgemini.com/",
    },
    contractType: "work-study program",
    begining: "August 2021",
    duration: 12,
    title: "FullStack developer",
    description: "",
  }
  // {
  //   company: {
  //     name: "Koust",
  //     website: "http,s://www.capgemini.com/",
  //   },
  //   contractType: "Business internship",
  //   begining: "August 2021",
  //   duration: 12,
  //   title: "Web/mobile developer",
  //   description: "",
  // },
  // {
  //   company: {
  //     name: "Intia",
  //     website: "http,s://www.capgemini.com/",
  //   },
  //   contractType: "Business internship",
  //   begining: "August 2021",
  //   duration: 12,
  //   title: "Web/mobile developer",
  //   description: "",
  // },
  // {
  //   company: {
  //     name: "Intia",
  //     website: "http,s://www.capgemini.com/",
  //   },
  //   contractType: "Business internship",
  //   begining: "August 2021",
  //   duration: 12,
  //   title: "Web/mobile developer",
  //   description: "",
  // },
  // {
  //   company: {
  //     name: "Intia",
  //     website: "http,s://www.capgemini.com/",
  //   },
  //   contractType: "Business internship",
  //   begining: "August 2021",
  //   duration: 12,
  //   title: "Web/mobile developer",
  //   description: "",
  // }
);

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
  height: 100%;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
.experience-page__experience {
  width: 100vh;
  height: 50vh;
  display: flex;
  justify-content: space-between;

  h1.experiences-page__experience-year {
    width: 100vw;
    text-align: center;
    font-size: clamp(1.25rem, 3vw, 2.5rem);
    color: white;
    font-weight: 500;
  }
}
</style>
