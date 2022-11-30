<template>
  <div class="center-container">
    <div class="experiences">
      <div class="experiences__companies-list">
        <NuxtLink
          v-for="(company, index) of companies"
          @click="selectCompany(index)"
        >
          <div class="experience__company-name">
            <span>{{ company.name }}</span>
          </div>
        </NuxtLink>
      </div>

      <div class="experience__company-experiences">
        {{ selectedCompany.experiences }}
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
  company : Company, 
  contractType: "work-study program" | "Business internship";
  begining: string;
  duration: number;
  title: string;
  description: string;
}

let experienceList: Array<Experience> = [];

let exp : Experience =   {
    company : {
      name : "capgemini",
      website: "https://www.capgemini.com/",
    },
    contractType: "work-study program",
    begining: "August 2021",
    duration: 12,
    title: "FullStack developer",
    description: "",
  }

let exp2 : Experience = {
    company : {
      name : "Koust",
      website = "http,s://www.capgemini.com/"
    },
    contractType: "Business internship",
    begining: "August 2021",
    duration: 12,
    title: "Web/mobile developer",
    description: "",
  }

  experienceList.push({
    company : {
      name : "capgemini",
      website: "https://www.capgemini.com/",
    },
    contractType: "work-study program",
    begining: "August 2021",
    duration: 12,
    title: "FullStack developer",
    description: "",
  }, {
    company : {
      name : "Koust",
      website : "http,s://www.capgemini.com/"
    },
    contractType: "Business internship",
    begining: "August 2021",
    duration: 12,
    title: "Web/mobile developer",
    description: "",
  }, {
    company : {
      name : "Intia",
      website  : "http,s://www.capgemini.com/"
    },
    contractType: "Business internship",
    begining: "August 2021",
    duration: 12,
    title: "Web/mobile developer",
    description: "",
  }, 
  {
    company : {
      name : "Intia",
      website  : "http,s://www.capgemini.com/"
    },
    contractType: "Business internship",
    begining: "August 2021",
    duration: 12,
    title: "Web/mobile developer",
    description: "",
  },
  {
    company : {
      name : "Intia",
      website  : "http,s://www.capgemini.com/"
    },
    contractType: "Business internship",
    begining: "August 2021",
    duration: 12,
    title: "Web/mobile developer",
    description: "",
  });

let selectedExperience: Ref<Company> = ref(experienceList[0]);
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

.center-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p.header {
    color: $third-color;
    font-size: clamp(1rem, 6vw, 3rem);
    font-weight: 600;
  }

  .experiences {
    margin-top: 50px;
    width: 100vw;
    height: 300px;
    background-color: red;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .experiences__companies-list {
      height: 15%;
      background-color: green;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;
      // overflow-x: auto;

      a {
        cursor: pointer;
      }
      .experience__company-name {
        height: 100%;
        // min-width: 100px;
        // margin-left: 20px;

        display: flex;
        justify-content: center;
      }
    }

    div .experience__company-experiences {
      background-color: green;
    }
  }
}
</style>
