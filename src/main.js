import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

// 全局样式
import "styles/index.scss";
import VueLazyLoad from "vue3-lazyload";
import element3 from "plugins/element3.js";

const app = createApp(App);

// 分环境处理
if (process.env.NODE_ENV === "development") {
  // if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in window) {
  // // 这里__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue赋值一个createApp实例
  //   window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
  // }
  app.config.devtools = true;
}
app.use(VueLazyLoad, {
  log: false
})
app.use(router).use(store).use(element3).mount("#app");
