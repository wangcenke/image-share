<template>
  <div class="app-wrapper">
    <!-- 顶部导航 -->
    <div class="fixed-header">
      <head-bar></head-bar>
    </div>
    <!-- 内容区 -->
    <div class="container">
      <div class="cols">
        <!-- main -->
        <main class="col-main">
          <app-main />
        </main>
        <card-list class="col-left">
          <card-item>left 1</card-item>
          <div class="sticky-wrap">
            <card-item>left 2</card-item>
            <card-item>left 3</card-item>
          </div>
        </card-list>
        <card-list class="col-right">
          <div class="sticky-wrap">
            <card-item>right 1</card-item>
            <card-item>right 2</card-item>
          </div>
        </card-list>
      </div>
    </div>
    <!-- footer -->
    <footer-bar></footer-bar>
  </div>
</template>

<script setup>
import AppMain from "./components/AppMain.vue";
import HeadBar from "./components/HeadBar.vue";
import FooterBar from "./components/FooterBar.vue";
import CardItem from "./components/CardItem.vue";
import CardList from "./components/CardList.vue";
// import Sidebar from "./components/Sidebar/index.vue";
</script>

<style lang="scss" scoped>
@import "styles/mixin.scss";
@import "styles/variables.module.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  width: 100%;
  height: 100%;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  // width: calc(100% - #{$sideBarWidth});
  width: 100%;
  transition: width 0.28s;
  background-color: $bgc;
}
</style>
