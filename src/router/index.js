import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import config from "@/config.yml";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/kakaologin',
    name: 'kakaologin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "parent" */ '../views/KakaoLogin.vue')
  },
  {
    path: '/naverlogin',
    name: 'naverlogin',
    component: () => import(/* webpackChunkName: "parent" */ '../views/NaverLogin.vue')
  },
  {
    path: '/googlelogin',
    name: 'googlelogin',
    component: () => import(/* webpackChunkName: "parent" */ '../views/GoogleLogin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//구글 로그인 api 정보 Element 선택자
var input = document.getElementById("client_id")
// 구글 로그인 api를 사용하기위해 '@/config.yml' 에 저장된 cliend_id 가져와서 넣어줍니다
input.setAttribute("content", config.googleIdKey)

export default router
