import { createRouter, createWebHistory } from 'vue-router'

import About from '../components/About.vue';

import AllInfo from '../components/AllInfo.vue';

import Contacts from '../components/Contacts.vue';

import Portfolio from '../components/Portfolio.vue';

import WorkProgram from '../components/WorkPrograms.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AllInfo',
      component: AllInfo
    },
    {
      path: '/about',
      name: 'About',
      component: About},
      {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts},
      {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio},
      {
      path: '/workprogram',
      name: 'WorkProgram',
      component: WorkProgram}
  ]
})

export default router
