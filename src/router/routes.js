
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'Somos', component: () => import('pages/Somos.vue') },
      { path: 'Mapas', component: () => import('pages/Mapas.vue') },
      { path: 'Municipios', component: () => import('pages/Municipios.vue') },
      { path: 'Rankings', component: () => import('pages/Rankings.vue') },
      { path: 'Servicios', component: () => import('pages/Servicios.vue') },
      { path: 'Comparar', component: () => import('pages/Comparar.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
