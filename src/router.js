import {createWebHistory, createRouter} from "vue-router";
// import routes from "~pages";
import {setupLayouts} from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // 检查token
  const token = localStorage.getItem("token");

  if (to.path !== "/login" && !token) {
    next({path: "/login"});
    return;
  }
  next();
});

export default router;
