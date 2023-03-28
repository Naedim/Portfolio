<template>
    <footer class = "flex items-center w-full p-3 justify-evenly h-30">
        
        <NuxtLink v-for="(icon, index) in iconlist" :to= urlList[index] target="_blank" class = "flex flex-col items-center text-orange-200">
            <Icon :icon=icon title="linkedin link" class = "text-4xl" />
            <p class = "text-xl" >{{ labelList[index]}}</p>
        </NuxtLink>
        
    </footer>
</template>

<script  setup lang="ts">
import { Icon } from "@iconify/vue";

const iconlist = ["mdi:linkedin", "mdi:github"];
const labelList = ["Linkedin", "Github"]
const urlList = ["https://www.linkedin.com/in/dam-no/", "https://github.com/Naedim"]

</script>