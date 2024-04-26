<template>
  <button
  type="button"
  data-twe-ripple-init
  class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
  Button
</button>
    <div className="mt-16 flex justify-center">
      <p className="text-lg">
        Hover the link to see the
        <a
          href="#"
          className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          data-twe-toggle="tooltip"
          title="Hi! I'm tooltip">
          tooltip
        </a>
      </p>
    </div>
</template>
  
<script setup>
import { onMounted } from "vue";import { Tooltip, initTWE, Ripple } from "tw-elements";
  onMounted(() => {
initTWE({ Tooltip, Ripple });});
</script>