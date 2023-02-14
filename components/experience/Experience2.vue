<template>
  <div class="experience">

    <div class="experience__content">

      <div class="experience__info">
        <Icon icon="ic:baseline-code" title="navbar's logo's icon" />
        <h3>
          {{ experience.title }}
        </h3>
      </div>

      <div class="experience__info">
        <Icon icon="ic:outline-handshake" title="navbar's logo's icon" />

        <h3>
          {{ experience.contractType }}
        </h3>
      </div>


      <!-- <div class="experience__info">
        <Icon icon="majesticons:rocket-3-start" title="navbar's logo's icon" />
        <h3>
          {{ experience.begining }}
        </h3>

      </div> -->

      <div class="experience__info">
        <Icon icon="ion:clock" title="navbar's logo's icon" />

        <h3>
          {{ experience.duration }} months
        </h3>
      </div>
    </div>
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
  height: 40%;
  width: 100%;
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .experience__content {
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);

    .experience__info {
      width: 100%;
      height: 100%;

      grid-column : span 1;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      svg {
        color: $accent;
        font-size: 7vh;

        //height is defined in the iconify Icon component in the HTML (couldn't do it in css)
      }

      h3 {
        text-align: center;
        color: $secondary;
        font-size: 2.5vh;

      }

      &:nth-child(3) {
        grid-column: span 2;

        // justify-content: flex-start;
      }
    }


    // .experience__know-more {
    //   flex: 2;
    //   width: 100%;
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;



    //   button {
    //     width: 80%;
    //     height: 90%;
    //     background-color: $primary;
    //     color: $secondary;
    //     border-radius: 5px;
    //     border: none;
    //   }
    // }
  }
}
</style>
