<template>
    <div class="flex w-screen items-center border-opacity-50 text-violet-300 px-2">
        <div class="h-[1px] flex grow bg-violet-300"/>
        <div class="px-2 text-center text-sm">{{ props.title }}</div>
        <div class="h-[1px] flex grow bg-violet-300"/>
    </div>
</template>


<script setup lang="ts">
const props = defineProps({
    title : String
})

</script>