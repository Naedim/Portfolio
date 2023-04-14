<template>
  <div
    id="app"
    class="box-border flex min-h-[100vh] w-screen flex-col bg-neutral-900 p-3 sm:p-6 md:p-10"
    :class="isMobileMenuActive ? 'overscroll-none' : 'landscape:overflow-y-scroll'"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import {Ref} from "vue";
const isMobileMenuActive: Ref<Boolean> = useState("isMobileMenuActive", () => false);
const title = "Damien NOEL's Portfolio";
const description =
  "Hello I'm Damien NOEL, a newly graduated developper and this is the portfolio that tracks the project I'm working on";
// This will be reactive even you change title/description above
useHead({
  htmlAttrs: {
    lang: "en",
  },
  script: [
    {
      children: ` !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_MHqNdKpl54eIZVtHk9Ti9MSqSBrhLtzhMZifPzFAcan',{api_host:'https://eu.posthog.com'})`,
    },
  ],
  title: title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  font-family: "Poppins";
}

button {
  all: unset;
  cursor: pointer;
}
button:hover {
  transform: scale(1.05);
}
</style>
