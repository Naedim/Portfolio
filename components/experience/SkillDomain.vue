<template>
  <div class="skill-domain">
    <Icon class="skill-domain__arrow" icon="ic:baseline-arrow-right" />

    <h4 class="skill-domain__title">{{ skillDomain.title }}</h4>

    <div class="skill-domain__content">

      <!-- <div class="skill-domain__skill-container" v-for="skill in skillDomain.skillList">
        <Skill :skill=skill />
      </div -->

      <Skill v-for="skill in skillDomain.skillList" :skill=skill />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { SkillDomainInterface } from "~~/models/interfaces/SkillDomainInterface";
import Skill from "./Skill.vue";
const props = defineProps<{
  skillDomain: SkillDomainInterface;
}>();

</script>

<style scoped lang="scss">
.skill-domain {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  grid-template-rows: 2fr 9fr;
  align-items: center;

  svg.skill-domain__arrow {
    grid-area: 1 /1 /2 /2;
    // justify-self: center;
    color: $accent-2;
    font-size: 6vw;

  }

  h4.skill-domain__title {
    color: $accent;
    font-size: 4vw;
    grid-area: 1 /2 /2 /-1;

  }


  .skill-domain__content {
    height : 100%;
    grid-area: 2 /2 /-1 /3;
    display : grid;
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    column-gap: 3vw;
    row-gap: 2vw;
  }

  // .skill-domain__content {
  //   grid-area: 2 /2 /-1 /3;
  //   height: 100%;
  //   max-height: 100%;

  //   display: flex;
  //   flex-wrap: wrap;
  //   justify-content: center;
  //   align-items: flex-end;
  // }

  // .skill-domain__skill-container {
  //   flex: 1;
  // }
}
</style>
