<template>
  <div class="experience">

    <div class="experience_contract">

      <div class="experience_contract-info ">
        <Icon icon="ic:baseline-code" title="navbar's logo's icon" />
        <h3>
          {{ experience.title }}
        </h3>
      </div>

      <div class="experience_contract-info ">
        <Icon icon="ic:outline-handshake" title="navbar's logo's icon" />

        <h3>
          {{ experience.contractType }}
        </h3>
      </div>

      <div class="experience_contract-info ">
        <p>
          {{ experience.description }}
        </p>
      </div>

    </div>

    <!-- <div class="experience__subjects">
      <p v-for="subject in experience.Skillsetlist">
        {{ subject.description }}
      </p>
    </div> -->
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
$gap-value : 5vw;

.experience {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .experience_contract {
    flex: 2;
    // height: 50%;
    // height : 50%;
    width: 100%;

    border: 3px solid $slate-4;
    border-radius: 25px;

    box-sizing: border-box;
    padding: 1vw;

    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);

    .experience_contract-info {
      width: 100%;
      height: 100%;

      grid-column: span 1;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &:nth-child(3) {
        grid-column: span 2;

      }

      svg {
        color: $accent;
        font-size: 7vh;

      }

      h3 {
        text-align: center;
        color: $secondary;
        font-size: 2vh;
      }

      p{
        display : flex;
        justify-content: center;
        color : $secondary;
        font-weight: 600;
        font-size: ;
      }
    }
  }

  .experience__subjects {
    flex: 1;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 2.5vh;
    color: $secondary;
  }
}
</style>
