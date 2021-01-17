import Vue from 'vue'
import Router from 'vue-router'
import RunSlotMachine from '@/views/runSlotMachine.vue'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    redirect: {
      name: 'RunSlotMachine'
    }
  },
  {
    path: '/runSlotMachine',
    name: 'RunSlotMachine',
    component: RunSlotMachine
  }
  ]
})
