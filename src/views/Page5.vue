<template>
  <div class="card">
    <ul ref="list">
      <li class="test1 test2">项目1</li>
      <li class="test1 test2">项目2</li>
      <li class="test1 test2">项目3</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { addClass } from "utils/addClass";
import styles from "styles/variables.module.scss";
console.log(styles);
const list = ref(null);
onMounted(() => {
  // console.log(list.value.children);
  const items = list.value.children;
  for (let i = 0; i < items.length; i++) {
    // console.log(items[i]);
    const item = items[i];
    addClass(item, "test3");
  }
});
</script>

<style lang="scss" scoped>
.test3 {
  color: red;
  font-size: 0.2rem;
}
</style>
