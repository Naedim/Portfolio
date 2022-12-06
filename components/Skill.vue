<template>
  <div class="skill">
    <Icon :icon="skill.logo" />
  </div>
</template>

<script setup lang="ts">
import { SkillInterface } from "~~/models/interfaces/SkillInterface";
import { Icon } from "@iconify/vue";

const props = defineProps<{
  skill: SkillInterface;
}>();
</script>

<style scoped lang="scss">
$secondary-color: #d81264;
$third-color: #ccd6f6;
$fourth-color: #6b7dad;

.skill{
    width : 33%;

    svg{
        height : 100%;
        width : 100%
    }
}
</style>
