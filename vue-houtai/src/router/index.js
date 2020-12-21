import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 导入登陆界面
import Login from '../views/Login.vue'

// 导入侧边栏组件
import main from '@/components/asides/default'
import options1 from '@/components/asides/options1'
import options2 from '@/components/asides/options2'
import options3 from '@/components/asides/options3'

Vue.use(VueRouter)

const routes = [
  { // 登陆界面
    path: '/login',
    name: 'login',
    component: Login
  },
  { // 主页面
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/', // 设置默认初始页面
        redirect: '/default'
      },
      {
        path: '/default',
        component: main
      },
      {
        path: '/options1',
        component: options1
      },
      {
        path: '/options2',
        component: options2
      },
      {
        path: '/options3',
        component: options3
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
