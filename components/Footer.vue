<template>
    <footer class = "box-border flex items-center justify-center gap-10 md:gap-20">
        
        <NuxtLink v-for="(icon, index) in iconlist" :to= urlList[index] target="_blank" :title = "`${labelList[index]} link`" class = "flex flex-col items-center text-white hover:text-orange-300 ">
            <Icon :name = "icon" :aria-label = "`${labelList[index]} link`" class = "text-4xl md:text-6xl" />
            <p class = "text-sm md:text-lg" >{{ labelList[index]}}</p>
        </NuxtLink>
        
    </footer>
</template>

<script  setup lang="ts">

const iconlist = ["mdi:linkedin", "mdi:github"];
const labelList = ["Linkedin", "Github"]
const urlList = ["https://www.linkedin.com/in/dam-no/", "https://github.com/Naedim"]

</script>