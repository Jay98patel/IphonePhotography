import { createRouter, createWebHistory } from 'vue-router'
import WelcomeComponent from './components/WelcomeComponent.vue'
import ThankYouComponent from './components/ThankYouComponent.vue'

const routes = [
  { path: '/', component: WelcomeComponent },
  { path: '/thankyou', component: ThankYouComponent }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
