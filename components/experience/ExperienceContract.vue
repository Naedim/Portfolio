<template>
    <div class="w-full bg-white">
        <Icon icon="ic:baseline-code" />
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'nuxt/dist/app/compat/vue-demi';
import { ExperienceInterface } from '~~/models/interfaces/ExperienceInteface';

let selectedExperience: Ref<ExperienceInterface> = useState('selectedExperience');

</script>