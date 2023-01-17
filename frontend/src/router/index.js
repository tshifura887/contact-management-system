import { createRouter, createWebHashHistory } from 'vue-router'
import UserSignUp from '../views/User/SignUp.vue'
import UserSignIn from '../views/User/SignIn.vue'
import AdminSignUp from '../views/Admin/SignUp.vue'
import AdminSignIn from '../views/Admin/SignIn.vue'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

const routes = [
  {
    path: '/user/signup',
    name: 'usersignup',
    component: UserSignUp
  }, 
  {
    path: '/user/signin',
    name: 'usersignin',
    component: UserSignIn,
  },
  {
    path: '/admin/signup',
    name: 'signup',
    component: AdminSignUp
  },
  {
    path: '/admin/signin',
    name: 'signin',
    component: AdminSignIn
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // beforeEnter: (to, from, next) => {
    //   if(store.state.isAuthenticated == false) {
    //       next(false);
    //   } else {
    //       next();
    //   }
    // }
  }, 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
