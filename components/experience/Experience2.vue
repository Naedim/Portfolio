<template>
  <div class="experience">

    <div class = "experience__contract">
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
    </div>

   

    <div class = "experience__skill-set" v-for="skillset in experience.Skillsetlist" >
      <h3>{{ skillset.description }}</h3>
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
.experience {
  height: 100%;
  width: 100%;

  display: flex; 
  flex-direction: column;


  .experience__contract{
    display : flex;
    justify-content: space-around;
    align-items: center;
    .experience_contract-info {
  

    grid-column: span 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      color: $accent;
      font-size: 10vw;

    }

    h3 {
      text-align: center;
      color: $secondary;
      font-size: 3vw;
    }
  }
 

  }


  .experience__skill-set{

    display : flex;
    flex-direction: column;

  }
}
</style>
