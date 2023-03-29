import welcomeComponent from "../components/WelcomeComponent.vue";
import thankYouComponent from "../components/ThankYouComponent.vue";

const routes = [
  {
    path: "/",
    name: "welcome",
    component: welcomeComponent,
  },
  {
    path: "/thankyou",
    name: "thankYou",
    component: thankYouComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;