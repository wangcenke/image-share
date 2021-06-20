<!-- https://www.npmjs.com/package/vue3-lazyload -->
<template>
  <div class="card-item" ref="item">
    <img v-lazy="{src: src, lifecycle: lazyOptions.lifecycle}" />
  </div>
</template>

<script setup>
import { defineProps, reactive } from "@vue/runtime-core";
defineProps({
  src: String,
});
const lazyOptions = reactive({
  log: false,
  lifecycle: {
        loading: () => {
          console.log('image loading')
        },
        error: () => {
          console.log('image error')
        },
        loaded: () => {
          console.log('image loaded!!')
        }
      }
})
</script>
