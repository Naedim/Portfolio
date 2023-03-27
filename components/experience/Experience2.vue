<template>
  <!-- <div class="experience">
    <div class="experience_contract-info" :title="experience.title">
      <Icon icon="ic:baseline-code" />
      <h4>
        {{ experience.title }}
      </h4>
    </div>

    <div class="experience_contract-info" :title="experience.contractType">
      <Icon icon="ic:outline-handshake" title="navbar's logo's icon" />

      <h4>
        {{ experience.contractType }}
      </h4>
    </div>

    <div class="experience__skill-domain-list">
      <div class="experience__skill-domain-container" v-for="domain in experience.skillDomainList">
        <SkillDomain :skillDomain="domain" :title="domain.title" />
      </div>
    </div>

  </div> -->
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ExperienceInterface } from "~~/models/interfaces/ExperienceInteface";
import SkillDomain from "./SkillDomain.vue";
const props = defineProps<{
  experience: ExperienceInterface;
}>();

</script>

<style scoped lang="scss">
.experience {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 10fr;
  row-gap: 4vh;

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

    h4 {
      text-align: center;
      color: $secondary;
      font-size: 3vw;
    }
  }

  .experience__skill-domain-list {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 2vh;
  }

  .experience__skill-domain-container{
    flex : 1;
  }

}
</style>
