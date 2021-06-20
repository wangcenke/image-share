<!--
 * @Author: wangcenke
 * @Date: 2021-06-10 09:58:50
 * @LastEditors: wangcenke
 * @LastEditTime: 2021-06-16 15:39:40
 * @Description:
-->
<template>
  <div class="card">
    <h1>page4</h1>
    <p @click="add">{{ count }}</p>
    <el-button @click="toPage3">to page3</el-button>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
  </div>
</template>

<script>
import { computed, defineComponent, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { mapActions, mapState, useStore } from "vuex";
import { Message, Msgbox } from "element3";
export default defineComponent({
  name: "page4",
  //   computed: {
  //     ...mapState("test", ["count"]),
  //   },
  //   methods: {
  //     ...mapActions("test", ["ADD"]),
  //   },
  beforeRouteEnter(to, from /* ,next */) {
    console.log("params", to.params);
    /* next(vm => {
            console.log(vm);
        }) */
    //   getdata
    //   console.log(from)
    // next();
  },
  beforeRouteUpdate(to, from) {
    console.log("beforeRouteUpdate", to);
    console.log("this", this);
  },
  async beforeRouteLeave(to, from) {
    // 在导航离开渲染该组件的对应路由时调用
    // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
    /*  try {
     await Msgbox.confirm("您将退出此页面，内容是否已保存?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
      return true
    } catch (error) {
        return false
    } */
  },
  setup() {
    console.log("page4");
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    // new api
    watch(
      () => route.params,
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      }
    );
    // console.log(store);
    return {
      count: computed(() => store.state.test.count),
      add: () => store.dispatch("test/ADD"),
      toPage3: () => router.push("/page4/2"),
    };
  },
});
</script>

<style lang="scss" scoped>
@import "styles/responsive.scss";
h1 {
  font-size: rem(18);
}
p {
  font-size: rem(16);
}
</style>
