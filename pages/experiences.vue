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
      <div class="experience-page__experience-content">
        <div class="experience-page__experience-company">
          <a
            :href="experience.company.website"
            target="_blank"
            rel="noopener noreferrer"
            alt="company's name and link to the company website"
          >
            <h2>
              {{ experience.company.name }}
            </h2>
            <Icon icon="mdi:open-in-new" title="open in new tab" />
          </a>
        </div>

        <div class="experience-page__experience-title">
          <h2>
            {{ experience.title }}
          </h2>
        </div>

        <div class="experience-page__experience-duration">
          <h3>{{ experience.duration }} mounths</h3>
          <Icon icon="ic:baseline-hourglass-bottom" title="open in new tab" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
/**
 * Informations about professionnal experiences, duration in months
 */

interface Company {
  name: string;
  website: string;
}

interface Skillset {
  description: string;
  skillsLogos: string[];
}
interface Experience {
  company: Company;
  contractType: "work-study program" | "Business internship";
  begining: string;
  duration: number;
  title: string;
  description: string;
  Skillsetlist: Skillset[];
}

let experienceList: Array<Experience> = [];

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
      skillsLogos: ["vue", "react", "angular"],
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
    height: 10%;

    h2 {
      text-align: center;
      font-size: clamp(2rem, 3vw, 2.5rem);
      color: white;
      font-weight: 500;
    }
  }

  .experience-page__experience-content {
    margin-top: 2%;
    box-sizing: border-box;
    width: 90%;
    padding-left: 4%;
    padding-right: 4%;

    border-color: $secondary-color;
    border-style: solid;
    border-width: 3px;
    border-radius: 10px;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    .experience-page__experience-company {
      display: flex;
      justify-content: center;
      a {
        display: flex;
        font-size: clamp(1.5rem, 3vw, 2.5rem);
        align-items: center;
        color: $third-color;
        display: flex;
        gap: 5px;

        h2 {
          color: $third-color;
          font-weight: 500;
        }

        svg {
          font-size: clamp(1.5rem, 3vw, 2.5rem);
        }

        &:hover {
          h2,
          svg {
            color: $secondary-color;
          }
        }
      }
    }

    .experience-page__experience-title {
      h2 {
        font-size: clamp(0.8rem, 3vw, 2.5rem);
        color: $third-color;
        font-weight: 500;
      }
    }

    .experience-page__experience-duration {
      display: flex;
      align-items: center;
      gap: 5px;
      h3 {
        font-size: clamp(0.8rem, 3vw, 2.5rem);
        color: $third-color;
        font-weight: 500;
      }
      svg {
        color: $third-color;
        font-size: clamp(0.8rem, 3vw, 2.5rem);
      }
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
