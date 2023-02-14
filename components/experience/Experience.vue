<template>
  <div class="experience">

    <div class="experience__content">

      

      <div class="experience__info-set">

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

      </div>

      <div class="experience__info-set">

        <div class="experience__info">
          <Icon icon="majesticons:rocket-3-start" title="navbar's logo's icon" />
          <h3>
            {{ experience.begining }}
          </h3>
        </div>

        <div class="experience__info">
          <Icon icon="ion:clock" title="navbar's logo's icon" />

          <h3>
            {{ experience.duration }} months
          </h3>
        </div>

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
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // padding : $gap-value;

  .experience__content {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    // .experience__company-website {
    //   flex: 2;
    //   width: 100%;

    //   display: flex;
    //   justify-content: center;
    //   align-items: center;

    //   gap: 7%;
    //   color: $primary;

    //   .experience__website-logo {
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;



    //     svg.experience__link-icon {
    //       font-size: 3.5vh;
    //     }

    //     p {
    //       font-size: 3vh;
    //     }
    //   }

    //   svg.experience__link-arrow {
    //     font-size: 3.5vh;
    //   }
    // }


    .experience__info-set {
      flex: 1;
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;


      .experience__info {
        flex : 1;

        display: flex;
        flex-direction: column;
        align-items: center;

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
      }
    }

    hr.experience__separator {
      width: 90%;
      margin: auto;
      border-top: 2px solid;
      border-color: $primary;
    }


    .experience__know-more {
      flex: 2;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;



      button {
        width: 80%;
        height: 90%;
        background-color: $primary;
        color: $secondary;
        border-radius: 5px;
        border: none;
      }
    }
  }
}
</style>
