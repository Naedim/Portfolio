<template>
    <footer class = "box-border flex items-center justify-center gap-10 md:gap-20">
        
        <NuxtLink v-for="(media, index) in medias" :to= media.url target="_blank" :title = "`${media.label} link`" class = "flex flex-col items-center text-black hover:text-purple-500 ">
            <Icon :name = "media.iconName" :aria-label = "`${media.label} link`" class = "text-4xl md:text-6xl" />
            <p class = "text-sm md:text-lg" >{{media.label}}</p>
        </NuxtLink>
        
    </footer>
</template>

<script  setup lang="ts">

const medias = [{
   iconName : "mdi:linkedin",
   label : "Linkedin",
   url : "https://www.linkedin.com/in/dam-no/"
},{
   iconName : "mdi:github",
   label : "Github",
   url : "https://github.com/Naedim"
}]

</script>