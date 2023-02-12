<template>
  <div class="experience">

    <div class="experience__content">
      <!-- <div class="experience__title">
        <h2>
          {{ experience.company.name }}

        </h2>
      </div> -->

       <div class="experience__company-website">
        <div class = "website-logo">
          <Icon icon="ic:outline-insert-link" class="page-icon" title="navbar's logo's icon"  />
          <p>website</p>
        </div>
        <p> {{ experience.company.website}} </p>
      </div>

      <div class="experience__info-set">

        <div class="experience__info">
          <Icon icon="majesticons:rocket-3-start" class="page-icon" title="navbar's logo's icon"  />
          <h3>
            {{ experience.begining }}
          </h3>
        </div>

        <div class="experience__info">
          <Icon icon="ion:clock" class="page-icon" title="navbar's logo's icon"  />

          <h3>
            {{ experience.duration }} months
          </h3>
        </div>

      </div>

      <hr class="experience__separator" />

      <div class="experience__info-set">

        <div class="experience__info">
          <Icon icon="ic:baseline-code" class="page-icon" title="navbar's logo's icon"  />
          <h3>
            {{ experience.title }}
          </h3>
        </div>

        <div class="experience__info">
          <Icon icon="ic:outline-handshake" class="page-icon" title="navbar's logo's icon"   />

          <h3>
            {{ experience.contractType }}
          </h3>
        </div>

      </div>

      <hr class="experience__separator" />

      <!-- <button>Know more</button> -->

      <!-- <div class="experience__know-more">
        <button>Know more</button>

      </div> -->
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
  background-color: #7D2859;
  box-sizing: border-box;
  padding : calc($gap-value / 2);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // padding : $gap-value;

  .experience__content {
    height: 100%;
    width : 100%;

    display : flex;
    flex-direction: column;
    justify-content: center;
    gap : $gap-value ;


    .experience__title {
      flex : 2;

      display: flex;
      justify-content: center;
      gap: 5vw;

      h2 {
        font-size: 4vh;
        color: $secondary;

      }
    }


    .experience__info-set{
      flex : 2;
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: flex-start;


      .experience__info {
        width : 40%;
        
        display: flex;
        flex-direction: column;
        align-items: center;

        svg {
          color: $accent;
          font-size: 6vh;
          //height is defined in the iconify Icon component in the HTML (couldn't do it in css)
        }

        h3 {
          text-align: center;
          color: $secondary;
          font-size: 2vh;

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
      flex : 2;
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
