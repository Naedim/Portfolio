<template>
  <div class="experience">

    <div class="experience__title">
      <h2>
        {{ experience.company.name }}

      </h2>
    </div>

    <div class="experience__timeline">

      <div class="experience__start">
        <Icon icon="majesticons:rocket-3-start" class="page-icon" title="navbar's logo's icon" />
        <h3>
          {{ experience.begining }}
        </h3>
      </div>

      <div class="experience__duration">
        <Icon icon="ion:clock" class="page-icon" title="navbar's logo's icon" />

        <h3>
          {{ experience.duration }} months
        </h3>
      </div>

    </div>

    <hr class="experience__separator" />

    <div class="experience__job-summary">

      <div class="experience__start">
        <Icon icon="ic:baseline-code" class="page-icon" title="navbar's logo's icon" />
        <h3>
          {{ experience.title }}
        </h3>
      </div>

      <div class="experience__duration">
        <Icon icon="ic:outline-handshake" class="page-icon" title="navbar's logo's icon" />

        <h3>
          {{ experience.contractType }}
        </h3>
      </div>

    </div>

    <hr class="experience__separator" />

      <!-- <Skillset v-for="skillset in experience.Skillsetlist" :skillet=skillset></Skillset> -->
      <SkillsetManager :skillsetList="experience.Skillsetlist" ></SkillsetManager>
  </div>

</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ExperienceInterface } from "~~/models/interfaces/ExperienceInteface";
import SkillsetManager from "./skillsetManager.vue";
const props = defineProps<{
  experience: ExperienceInterface;
}>();
</script>

<style scoped lang="scss">
// $secondary-color: #d81264;
// $third-color: #ccd6f6;
// $fourth-color: #6b7dad;

.experience {
  height: 80%;

  display : flex;
  flex-direction: column;

  .experience__title {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;

    h2 {
      text-align: center;
      color: $third-color;
      font-size: 30px;
    }

    img {
      width: 100%;
      height: auto;

    }
  }

}

.experience__timeline,
.experience__job-summary {

  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  .experience__start,
  .experience__duration {
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      color: #d81264;
      font-size: 40px;
    }

    h3 {
      color: white;
      font-size: 12px;

    }
  }

}

hr.experience__separator {
  width: 80%;
  margin: auto;
  border-top: solid;
  margin-top: 10px;
  margin-bottom: 10px;
  border-top: 1px;

  border-color: $fourth-color;
}
</style>
