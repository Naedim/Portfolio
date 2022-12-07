<template>
  <div class="skillset">
    <h2>{{ skillset.description }}</h2>
    <div class="skillset__skills">
      <Skill v-for="Skill of skillset.skillList" :skill="Skill" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { SkillsetInterface } from "~~/models/interfaces/SkillsetInterface";

const props = defineProps<{
  skillset: SkillsetInterface;
}>();
</script>

<style scoped lang="scss">
$secondary-color: #d81264;
$third-color: #ccd6f6;
$fourth-color: #6b7dad;

.skillset {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;

  h2 {
    color: $secondary-color;
    font-size: clamp(1rem, 3vw, 2.5rem);
    font-weight: 500;
  }

  .skillset__skills {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2%;
  }
}
</style>
