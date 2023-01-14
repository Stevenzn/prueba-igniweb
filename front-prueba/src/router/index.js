import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import DashboardView from "../views/DashboardView.vue";
import CategorysView from "../views/CategorysView.vue";
import ErrorComponent from "../views/ErrorComponent.vue"
const isUserLoggedIn = localStorage.getItem("token");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/error",
      name: "error",
      component: ErrorComponent,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
      meta: {
        needsAuth: true,
      },
    },
    {
      path: "/book-categorys",
      name: "categorys",
      component: CategorysView,
      meta: {
        needsAuth: true,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.meta.needsAuth) {
    if (isUserLoggedIn) {
      console.log("");
      to.meta.needsAuth = false;
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
