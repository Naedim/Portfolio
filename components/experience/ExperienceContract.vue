<template>
    <div class="grid items-center w-full grid-cols-2 grid-rows-2 p-2 font-bold border-orange-300 md:w-3/4 sm:p-3 justify-items-center border-y-2 g-white">
        <Icon icon="ic:baseline-code" class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
        <Icon icon="ic:outline-handshake" class="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />

        <p>{{ experience.title }}</p>

        <p> {{ experience.contractType }} </p>
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'nuxt/dist/app/compat/vue-demi';
import { ExperienceInterface } from '~~/models/interfaces/ExperienceInteface';
import { Icon } from "@iconify/vue";

let experience: Ref<ExperienceInterface> = useState('selectedExperience');

</script>

<style scoped >

svg{
    @apply text-red-500;
}
p {
    @apply text-[10px] sm:text-xs md:text-sm text-gray-200;
}
</style>


