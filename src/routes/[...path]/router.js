import { Router } from 'svelte-pilot'

export default new Router({
  callLoadOnClient: true,

  routes: [
    {
      path: '/',
      component: () => import('./views/index.svelte')
    },

    {
      path: '/fact',
      component: () => import('./views/Fact.svelte')
    }
  ]
})
