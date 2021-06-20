<template>
  <div class="box">
    {{ test }}
  </div>
  <button @click="testFn">testFn</button>
</template>

<script setup>
import { inject } from "vue";
const test = inject("test");
const testFn = inject("testFn");
</script>

<style lang="scss" scoped>
.box {
  margin: 0 auto;
  width: 200px;
  height: 200px;
  line-height: 200px;
  background: yellow;
}
</style>
