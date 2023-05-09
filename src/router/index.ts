import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/page1",
    name: "page1",
    component: () => import("../pages/Page1.vue"),
    // component: () => import("@/pages/errorPages/NotFound.vue"),
  },
  {
    path: "/page2",
    name: "page2",
    component: () => import("../pages/Page2.vue"),
    // component: () => import("@/pages/errorPages/NotFound.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export {
  router,
};
