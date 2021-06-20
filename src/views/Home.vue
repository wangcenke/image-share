<template>
  <div>Home</div>
  <p>{{ count }}</p>
  <button @click="add()">add</button>
  <p>{{ msg }}</p>
  <hr />
  <Child />
</template>

<script setup="props, context">
import { computed, defineProps, provide, ref } from "vue";
import { useStore } from "vuex";
import Child from "../components/Child.vue";

// provider props
const test = ref("123");
// provider
provide("test", test);
// provider fn
const testFn = () => {
  test.value = "456";
};
provide("testFn", testFn);
// 定义属性
defineProps({
  msg: String,
});

const store = useStore();
const count = computed(() => store.state.count);
const add = () => store.dispatch("add");
</script>

<style lang="scss" scoped></style>
