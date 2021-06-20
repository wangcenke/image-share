<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"
      >Vite Documentation</a
    >
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <el-button @click="onclick">emit</el-button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <el-input></el-input>
</template>

<script setup>
import { defineProps, reactive, defineEmit, useContext } from "vue";

defineProps({
  msg: String,
});

// emit 的用法
// 1
const ctx = useContext();
// console.log(ctx)
// 对外暴露方法
ctx.expose({
  someMethod() {
    console.log("some message from helloworld");
  },
});
// 2
const emit = defineEmit(["myclick"]);

const onclick = () => {
  // emit("myclick")
  ctx.emit("myclick");
};

const state = reactive({ count: 0 });

// 请求mock api
fetch("/api/getUser")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });
</script>
