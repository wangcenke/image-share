<template>
  <div class="test-box card">
    <div :style="{ color: variables.menuText }">Page3</div>
    <app-test name="test1" @mytest="onmytest">
      <p>hhh</p>
    </app-test>
    <h2 @click="add">{{ count }}</h2>
  </div>
</template>

<script setup>
import AppTest from "comp/Test.vue";
import variables from "styles/variables.module.scss";
import { getUser } from "api";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

const store = useStore();
const count = computed(() => store.state.test.count);
const add = () => store.dispatch("test/ADD");

getUser().then(data => {
  console.log(data);
});

const onmytest = prop => {
  console.log(prop.name);
};
</script>

<style lang="scss">
// @import "styles/responsive.scss";
.test-box {
  width: rem(430);
  height: rem(300);
  font-size: 0.15rem;
  p {
    margin: 0;
    color: red;
  }
}
.box {
  width: 100%;
  height: 3rem;
}
</style>
