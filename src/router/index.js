import Vue from 'vue'
import Router from 'vue-router'
import about from '@/components/about'
import API from '@/components/API'
import home from '@/components/home'
import introduction from '@/components/introduction'
import login from '@/components/login'
import message from '@/components/message'
import register from '@/components/register'
import detail from '@/components/detail'
import Userdetails from '@/components/Userdetails'
import issue from '@/components/issue'
import UserssearchHidden from '@/components/UserssearchHidden'
import deissue from '@/components/deissue'
Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/API',
      name: 'API',
      component: API
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: introduction
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/issue',
      name: 'issue',
      component: issue
    },
    {
      path: '/UserssearchHidden/:loginname',
      name: 'UserssearchHidden',
      component: UserssearchHidden
    },
    {
      path: '/deissue/:id',
      name: 'deissue',
      component: deissue
    },
    {
      path: '/Userdetails/:loginname',
      component: Userdetails
    },
    {
      path: '/detail/:titleId',
      component: detail
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

// 导出
export default router
