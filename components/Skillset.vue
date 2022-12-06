<template>
    <div class = "skillset">
        <div class = "skillset__description">
            <h2>{{skillset.description}}</h2>
        </div>
        <div class = "skillset__skills">
            <Skill v-for = "Skill of skillset.skillList" :skill="Skill"/>
        </div>    
    </div>
</template>
<script setup lang="ts">
import { SkillsetInterface } from '~~/models/interfaces/SkillsetInterface';


const props = defineProps<{
    skillset: SkillsetInterface;
}>();
</script>

<style scoped lang="scss">
$secondary-color: #d81264;
$third-color: #ccd6f6;
$fourth-color: #6b7dad;

.skillset{
    box-sizing: border-box;
    // border-color: $secondary-color;
    // border-style: solid;
    // border-width: 3px;
    // border-radius: 10px;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        color: $secondary-color;
        font-size: clamp(0.8rem, 3vw, 2.5rem);
        font-weight: 500;
    }

    .skillset__skills{
        width : 100%;
        height : 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2%;
    }
}
</style>