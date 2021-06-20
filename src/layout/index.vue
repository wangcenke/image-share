<template>
  <div class="app-wrapper">
    <!-- 顶部导航 -->
    <header class="header">
      <img
        src="https://images.pexels.com/photos/7400269/pexels-photo-7400269.jpeg?auto=compress&amp;bri=-5&amp;crop=focalpoint&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.6&amp;h=500&amp;sharp=10&amp;w=1400"
        srcset="
          https://images.pexels.com/photos/7400269/pexels-photo-7400269.jpeg?auto=compress&amp;bri=-5&amp;crop=focalpoint&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.6&amp;h=500&amp;sharp=10&amp;w=350   350w,
          https://images.pexels.com/photos/7400269/pexels-photo-7400269.jpeg?auto=compress&amp;bri=-5&amp;crop=focalpoint&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.6&amp;h=500&amp;sharp=10&amp;w=500   500w,
          https://images.pexels.com/photos/7400269/pexels-photo-7400269.jpeg?auto=compress&amp;bri=-5&amp;crop=focalpoint&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.6&amp;h=500&amp;sharp=10&amp;w=1000 1000w,
          https://images.pexels.com/photos/7400269/pexels-photo-7400269.jpeg?auto=compress&amp;bri=-5&amp;crop=focalpoint&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.6&amp;h=500&amp;sharp=10&amp;w=1500 1500w,
          https://images.pexels.com/photos/7400269/pexels-photo-7400269.jpeg?auto=compress&amp;bri=-5&amp;crop=focalpoint&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.6&amp;h=500&amp;sharp=10&amp;w=2000 2000w,
          https://images.pexels.com/photos/7400269/pexels-photo-7400269.jpeg?auto=compress&amp;bri=-5&amp;crop=focalpoint&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.6&amp;h=500&amp;sharp=10&amp;w=2500 2500w,
          https://images.pexels.com/photos/7400269/pexels-photo-7400269.jpeg?auto=compress&amp;bri=-5&amp;crop=focalpoint&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.6&amp;h=500&amp;sharp=10&amp;w=3000 3000w,
          https://images.pexels.com/photos/7400269/pexels-photo-7400269.jpeg?auto=compress&amp;bri=-5&amp;crop=focalpoint&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.6&amp;h=500&amp;sharp=10&amp;w=3500 3500w,
          https://images.pexels.com/photos/7400269/pexels-photo-7400269.jpeg?auto=compress&amp;bri=-5&amp;crop=focalpoint&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.6&amp;h=500&amp;sharp=10&amp;w=4000 4000w,
          https://images.pexels.com/photos/7400269/pexels-photo-7400269.jpeg?auto=compress&amp;bri=-5&amp;crop=focalpoint&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.6&amp;h=500&amp;sharp=10&amp;w=5000 5000w
        "
      />
      <div class="fixed">
        <head-bar :bgc="bgc" :isShow="isShow"></head-bar>
      </div>
    </header>
    <!-- 内容区 -->
    <div class="container">
      <card-list>
        <card-item v-for="(item, index) in data" :key="index" :src="item"></card-item>
      </card-list>
      
    </div>
    <!-- footer -->
    <!-- <footer-bar></footer-bar> -->
  </div>
</template>

<script setup>
import AppMain from "./components/AppMain.vue";
import HeadBar from "./components/HeadBar.vue";
import FooterBar from "./components/FooterBar.vue";
import CardItem from "./components/CardItem.vue";
import CardList from "./components/CardList.vue";
import { onUnmounted, ref } from "@vue/runtime-core";
import { getImage } from "api";
// import Sidebar from "./components/Sidebar/index.vue";

const data = ref([])
// mock data
getImage().then(res => {
  data.value = res.data
})
let bgc = ref("transparent");
let isShow = ref(false);
const windowScroll = () => {
  let scrollTop =
    window.pageYOffset ||
    document.documentElement.offsetTop ||
    document.body.scrollTop;
  // console.log(scrollTop);
  if (scrollTop > 100) {
    bgc.value = "rgba(36, 42, 54, 1)";
    isShow.value = true;
  } else {
    bgc.value = "transparent";
    isShow.value = false;
  }
};

window.addEventListener("scroll", windowScroll);
onUnmounted(() => {
  window.removeEventListener("scroll", windowScroll);
});
</script>

<style lang="scss">
@import "styles/mixin.scss";
@import "styles/variables.module.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
