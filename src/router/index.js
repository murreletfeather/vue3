import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import UserList from '../views/UserListView.vue';
import UserProfile from '../views/UserProfileView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import NotFoundView from '@/views/NotFoundView.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/userlist',
    name: 'userList',
    component: UserList
  },
  {
    path: '/userProfile',
    name: 'userProfile',
    component: UserProfile
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/404',
    name: '404',
    component: NotFoundView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
