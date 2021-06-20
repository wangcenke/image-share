import { createRouter, createWebHistory } from "vue-router";
import Layout from "layout/index.vue";
import Page1 from "views/Page1.vue";
export const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/page1",
    children: [
      {
        path: "/page1",
        name: "Page1",
        component: Page1,
      },
      {
        path: "/page2",
        name: "Page2",
        component: () => import("views/Page2.vue"),
        beforeEnter: (to, from) => {
          return false;
        },
      },
      {
        path: "/page3",
        name: "Page3",
        component: () => import("views/Page3.vue"),
      },
      {
        path: "/page4/:id",
        name: "Page4",
        component: () => import("views/Page4.vue"),
      },
      {
        path: "/page5",
        name: "Page5",
        component: () => import("views/Page5.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ top: 0 });
      }, 500);
    });
  },
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
