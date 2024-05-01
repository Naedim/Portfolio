<template>
    <div class="flex w-full  items-center">
        <div class="h-[2px] flex grow bg-violet-300"/>
        <div class="px-2 text-center text-sm xl:text-base font-bold text-violet-300">{{ props.title }}</div>
        <div class="h-[2px] flex grow bg-violet-300"/>
    </div>
</template>


<script setup lang="ts">
const props = defineProps({
    title : String
})

</script>