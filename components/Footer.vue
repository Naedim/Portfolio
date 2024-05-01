<template>
    <footer class = "box-border flex items-center justify-center gap-10">
        
        <div v-for="(media, index) in medias"  >
        <NuxtLink :to= media.url target="_blank" :title = "`${media.label} link`" class = "flex flex-col items-center">
        <button class = "p-2">
            <Icon :name = "media.iconName" :aria-label = "`${media.label} link`" class = "text-4xl lg:text-5xl " />
        </button>
        </NuxtLink>
        <p class = " text-white text-center text-sm  lg:text-lg xl:text-xl" >{{media.label}}</p>
        </div>
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