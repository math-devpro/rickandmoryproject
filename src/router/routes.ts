import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/default.vue'),
    children: [{ path: '', component: () => import('pages/index.vue') }],
  },
  {
    path: '/episodios',
    component: () => import('layouts/default.vue'),
    children: [{ path: '', component: () => import('pages/episodes.vue') }],
  },
  {
    path: '/localizacoes',
    component: () => import('layouts/default.vue'),
    children: [{ path: '', component: () => import('pages/locations.vue') }],
  },
  {
    path: '/local/:id',
    component: () => import('layouts/default.vue'),
    children: [{ path: '', component: () => import('pages/location.vue') }],
  },
  {
    path: '/personagem/:id',
    component: () => import('layouts/default.vue'),
    children: [{ path: '', component: () => import('pages/character.vue') }],
  },
  {
    path: '/episodio/:id',
    component: () => import('layouts/default.vue'),
    children: [{ path: '', component: () => import('pages/episode.vue') }],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  {
    path: '/sobre',
    component: () => import('layouts/default.vue'),
    children: [{ path: '', component: () => import('pages/about.vue') }],
  },
];

export default routes;
