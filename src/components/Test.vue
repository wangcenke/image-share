<template>
  <div class="test" @click="mytest">
    <slot></slot>
    <p>{{ nameComputed }}</p>
  </div>
</template>

<script setup>
import { computed, defineEmit, defineProps } from "@vue/runtime-core";

const prop = defineProps({
  name: String,
});
const nameComputed = computed(() => prop.name + " 123");

const emit = defineEmit(["mytest"]);
const mytest = () => {
  emit("mytest", prop);
};
</script>

<style lang="scss" scoped>
@import "styles/responsive.scss";
.test {
  width: 30vw;
  height: 300px;
  // background-color: yellowgreen;
  font-size: rem(24);
}
</style>
