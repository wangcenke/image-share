<template>
  <div>About</div>
  <p>{{ count }}</p>
  <button @click="add()">add</button>
  <Test></Test>
</template>

<script setup>
import Test from "comp/Test.vue";
import { defineEmit, defineProps, ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
const add = () => {
  count.value++;
};
</script>

<style lang="scss" scoped></style>
