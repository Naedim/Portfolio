<template>
  <div class="experience">

    <div class="experience__title">
      <h2>
        {{ experience.company.name }}

      </h2>
    </div>

    <div class="experience__timeline">

      <div class="experience__first-info">
        <Icon icon="majesticons:rocket-3-start" class="page-icon" title="navbar's logo's icon" />
        <h3>
          {{ experience.begining }}
        </h3>
      </div>

      <div class="experience__second-info">
        <Icon icon="ion:clock" class="page-icon" title="navbar's logo's icon" />

        <h3>
          {{ experience.duration }} months
        </h3>
      </div>

    </div>

    <hr class="experience__separator" />

    <div class="experience__job-summary">

      <div class="experience__first-info">
        <Icon icon="ic:baseline-code" class="page-icon" title="navbar's logo's icon" />
        <h3>
          {{ experience.title }}
        </h3>
      </div>

      <div class="experience__second-info">
        <Icon icon="ic:outline-handshake" class="page-icon" title="navbar's logo's icon" />

        <h3>
          {{ experience.contractType }}
        </h3>
      </div>

    </div>

    <hr class="experience__separator" />

      <!-- <Skillset v-for="skillset in experience.Skillsetlist" :skillet=skillset></Skillset>
      <SkillsetManager :skillsetList="experience.Skillsetlist" ></SkillsetManager> -->

      
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

.experience {
  height: 45vh;
  width : 70vw;
  background-color: white;
  border : 3px solid $primary;
  border-radius: 15px;
  box-shadow: 5px 5px 5px $primary;

  display : flex;
  flex-direction: column;

  .experience__title {
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;

    h2 {
      text-align: center;
      color: $slate-9;
      font-size: 20px;
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

  .experience__first-info,
  .experience__second-info {
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      color: #d81264;
      font-size: 30px;
    }

    h3 {
      text-align: center;
      color: white;
      font-size: 10px;

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

  border-color: $slate-4;
}
</style>
