<template>

  <div class="skillset-manager">

    <div class="skillset-manager__skillset-list">
      <div v-for="skillset in skillsetList" class="skillset-manager__skillset-description">
        <h3> {{ skillset.description }}</h3>
        <Icon icon="ic:baseline-arrow-forward" title="more info about this experience" />
      </div>
      <!-- <h3 v-for="skillset in skillsetList"> {{ skillset.description }}</h3> -->

    </div>

  </div>

</template>

<script setup lang="ts">
import { SkillsetInterface } from '~~/models/interfaces/SkillsetInterface';
import { Icon } from "@iconify/vue";

const props = defineProps<{
  skillsetList: SkillsetInterface[];
}>();
</script>

<style scoped lang="scss">
.skillset-manager {
  display: flex;
  flex-grow: 0.5;
}

.skillset-manager__skillset-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap : 10px;

  // h3{
  //   font-size: 22px;
  //   color: $slate-4;

  // }

  .skillset-manager__skillset-description {
    width: 80%;

    display: flex;

    align-items: center;
    gap: 10px;

    h3 {
      flex: 6;
      font-size: 18px;
      color: $slate-4;
    }

    svg {
      flex: 1;
      color : $primary;
      font-size: 25px;
    }
  }
}
</style>
