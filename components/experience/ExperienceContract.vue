<template>
    <div class="w-full bg-white">
        <Icon icon="ic:baseline-code" class = "text-red-500"/>
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'nuxt/dist/app/compat/vue-demi';
import { ExperienceInterface } from '~~/models/interfaces/ExperienceInteface';
import { Icon } from "@iconify/vue";

let selectedExperience: Ref<ExperienceInterface> = useState('selectedExperience');

</script>