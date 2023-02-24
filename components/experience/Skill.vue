<template>
    <div class="skill">
        <img v-if = "skill.logoIsLocal"  :source = "`@/assets/skillsPictures/${skill.logo}`" />
        <i  v-else :class="skill.logo"></i>

        <h5>{{ skill.name }}</h5>
    </div>
</template>
  
<script setup lang="ts">
import { SkillInterface } from '~~/models/interfaces/SkillInterface';

const props = defineProps<{
    skill: SkillInterface;
}>();

</script>
  
<style scoped lang="scss">
.skill {

    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;

    i {
        font-size: 8vw;
    }

    h5 {

        font-size: 3.5vw;
        color : $secondary;
        font-weight: 200;
    }
}
</style>
  