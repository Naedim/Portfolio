<template>
    <div class="skill">
        <img :src="`/assets/skillsPictures/${props.skill.logo}`" />
        <h5>{{ skill.name }}</h5>
    </div>
</template>
  
<script setup lang="ts">
import path from 'path';
import { SkillInterface } from '~~/models/interfaces/SkillInterface';

const props = defineProps<{
    skill: SkillInterface;

}>();


</script>
  
<style scoped lang="scss">
.skill {
    display : flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height : 100%;
    width : 100%;

    img{
        height : 40%;
        width : 40%;
    }

    h5 {

        font-size: 3.5vw;
        color: $secondary;
        font-weight: 200;
    }
}
</style>
  