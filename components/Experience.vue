<template>
  <div class="experience">
    <div class="experience__company">
      <a
        :href="experience.company.website"
        target="_blank"
        rel="noopener noreferrer"
        :alt="experience.company.name"
      >
        <h2>
          {{ experience.company.name }}
        </h2>
        <Icon icon="mdi:open-in-new" title="open in new tab" />
      </a>
    </div>
    <div class="experience__content">
      <h2>
        {{ experience.title }}
      </h2>
      <h2>{{ experience.contractType }}</h2>

      <div class="experience__skillset-list">
        <Skillset
          v-for="Skillset of experience.Skillsetlist"
          :skillset="Skillset"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ExperienceInterface } from "~~/models/interfaces/ExperienceInteface";
const props = defineProps<{
  experience: ExperienceInterface;
}>();
</script>

<style scoped lang="scss">
$secondary-color: #d81264;
$third-color: #ccd6f6;
$fourth-color: #6b7dad;

.experience {
  margin-top: 2%;
  box-sizing: border-box;
  width: 100%;

  // border-color: $secondary-color;
  // border-style: solid;
  // border-width: 3px;
  // border-radius: 10px;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  .experience__company {
    display: flex;
    justify-content: center;
    a {
      display: flex;
      font-size: clamp(1.5rem, 3vw, 2.5rem);
      align-items: center;
      display: flex;
      gap: 2%;

      h2 {
        color: white;
        font-weight: 500;
      }
      svg {
        font-size: clamp(2.2rem, 3vw, 2.5rem);
        color: white;
      }

      &:active {
        h2 {
          color: $secondary-color;
        }
      }
    }
  }

  .experience__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: clamp(1rem, 3vw, 2.5rem);
      color: $third-color;
      font-weight: 500;
    }

    .experience__duration {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1%;
      h3 {
        font-size: clamp(1.2rem, 3vw, 2.5rem);
        color: $third-color;
        font-weight: 500;
      }
    }

    .experience__skillset-list {
      flex-grow: 1;
      width: 100%;
      box-sizing: border-box;
      padding-top: 4%;
      padding-left: 4%;
      padding-right: 4%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>
