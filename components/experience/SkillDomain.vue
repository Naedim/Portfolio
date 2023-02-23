<template>
  <div class="skill-domain">
    <Icon class="skill-domain__arrow" icon="ic:baseline-arrow-right" />

    <h3 class="skill-domain__title">{{ skillDomain.title }}</h3>

    <div class="skill-domain__content">

    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { SkillDomainInterface } from "~~/models/interfaces/SkillDomainInterface";
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
  grid-template-rows: 1fr 9fr;


  svg.skill-domain__arrow {
    grid-area: 1 /1 /2 /2;
    color: $accent-2;
    font-size: 6vw;

  }

  h3.skill-domain__title {
    color: $accent;
    font-size: 4vw;
    grid-area: 1 /2 /2 /-1;

  }


  .skill-domain__content {
    grid-area: 2 /2 /-1 /-1;
  }

}
</style>
