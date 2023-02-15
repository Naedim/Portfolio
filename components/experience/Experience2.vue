<template>
  <div class="experience">

    <div class="experience__summary">

      <div class="experience__summary-info">
        <Icon icon="ic:baseline-code" title="navbar's logo's icon" />
        <h3>
          {{ experience.title }}
        </h3>
      </div>

      <div class="experience__summary-info">
        <Icon icon="ic:outline-handshake" title="navbar's logo's icon" />

        <h3>
          {{ experience.contractType }}
        </h3>
      </div>

      <div class="experience__summary-info">
        <Icon icon="ion:clock" title="navbar's logo's icon" />

        <h3>
          {{ experience.duration }} months
        </h3>
      </div>

    </div>

    <div class="experience__subjects">
      <p v-for="skillset in experience.Skillsetlist">{{ skillset.description }}</p>
    </div>
</div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ExperienceInterface } from "~~/models/interfaces/ExperienceInteface";
import SkillsetManager from "./skillsetManager.vue";
const props = defineProps<{
  experience: ExperienceInterface;
}>();
</script>

<style scoped lang="scss">
$gap-value : 5vw;

.experience {
  height: 100%;
  width: 100%;
  border: 3px solid $slate-4;
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .experience__summary {
    flex: 3;
    // height: 50%;
    // height : 50%;
    width: 100%;

    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);

    .experience__summary-info {
      width: 100%;
      height: 100%;

      grid-column: span 1;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      svg {
        color: $accent;
        font-size: 5vh;

        //height is defined in the iconify Icon component in the HTML (couldn't do it in css)
      }

      h3 {
        text-align: center;
        color: $secondary;
        font-size: 2vh;

      }

      &:nth-child(3) {
        grid-column: span 2;

        // justify-content: flex-start;
      }
    }

    experience__subjects {
      flex : 2;
      // height: 50%;
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        color: white;
      }
    }
  }
}
</style>
