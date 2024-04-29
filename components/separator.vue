<template>
    <div class="flex w-screen items-center px-2 h-2">
        <div class="h-[1px] flex grow bg-violet-900"/>
        <div class="px-2 text-center text-sm text-violet-900">{{ props.title }}</div>
        <div class="h-[1px] flex grow bg-violet-900"/>
    </div>
</template>


<script setup lang="ts">
const props = defineProps({
    title : String
})

</script>