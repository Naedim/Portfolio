<template>
  <div class="center-container">
    <div class="experiences">
      <div class="experiences__companies-list">
        <NuxtLink
          v-for="(company, index) of companies"
          @click="selectExperience(index)"
        >
          <div class="experience__company-name">
            <p>{{ company.name }}</p>
          </div>
        </NuxtLink>
      </div>

      <div class="experience__company-experiences">a</div>
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
  experiences: Experience[];
}
interface Experience {
  contractType: "work-study program" | "Business internship";
  begining: string;
  duration: number;
  title: string;
  description: string;
}

let companies: Array<Company> = [];

companies.push(
  {
    name: "Capgemini",

    website: "https://www.capgemini.com/",
    experiences: [
      {
        contractType: "work-study program",
        begining: "August 2021",
        duration: 12,
        title: "FullStack developer",
        description: "",
      },
      {
        contractType: "Business internship",
        begining: "August 2021",
        duration: 12,
        title: "FullStack developer",
        description: "",
      },
    ],
  },

  {
    name: "Koust",
    website: "https://www.capgemini.com/",
    experiences: [
      {
        contractType: "Business internship",
        begining: "August 2021",
        duration: 12,
        title: "Web/mobile developer",
        description: "",
      },
    ],
  },
  {
    name: "Intita",
    website: "https://www.capgemini.com/",
    experiences: [
      {
        contractType: "Business internship",
        begining: "August 2021",
        duration: 12,
        title: "FullStack developer",
        description: "",
      },
    ],
  }
);

let selectedCompany: Ref<Company> = ref(companies[0]);
let selectExperience = (index: number) => {
  console.log(index);
  selectedCompany = ref(companies[index]);

  console.log(selectedCompany);
};

console.log(companies);
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
