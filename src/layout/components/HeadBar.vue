<template>
  <div class="header-bar" :style="{ background: bgc }">
    <div class="logo-wrap">
      <a href="/">
        <img src="@/assets/logo.jpeg" alt="logo" />
        <h1>图片分享</h1>
      </a>
    </div>
    <el-input
      v-show="isShow"
      placeholder="请输入内容"
      v-model="input3"
      @change="inputChange"
      style="width: 750px"
    >
    </el-input>
    <Navbar />
  </div>
</template>

<script setup>
import { defineProps } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
import Navbar from "./Navbar/index.vue";

defineProps({
  bgc: String,
  isShow: Boolean,
});

let input3 = ref("");
const inputChange = e => {
  console.log(e);
};
</script>
