<template>
  <div class="skill-domain">
    <Icon class="skill-domain__arrow" icon="ic:baseline-arrow-right" />

    <h4 class="skill-domain__title">{{ skillDomain.title }}</h4>

    <div class="skill-domain__content">

        <Skill v-for = "skill in skillDomain.skillList" :skill = skill /> 
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
  grid-template-columns: 1fr 9fr;
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
    grid-area: 2 /2 /-1 /-1;
    align-self: center;
    display : grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 3vw;
    row-gap: 1vw;
    place-items: center;
    align-self: flex-end;
  }

}
</style>
