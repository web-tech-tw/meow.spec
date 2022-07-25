import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout/Index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/ProfileView.vue'),
      },
    ],
  },
  {
    path: '/w',
    component: () => import('@/layouts/DefaultLayout/Index.vue'),
    children: [
      {
        path: '/',
        name: 'writer',
        component: () => import('@/views/WriterView.vue'),
      },
      {
        path: 'code',
        name: 'code-writer',
        component: () => import('@/views/CodeWriterView.vue'),
      }
    ]
  },
  {
    path: '/r',
    component: () => import('@/layouts/DefaultLayout/Index.vue'),
    children: [
      {
        path: ':code',
        name: 'reader',
        component: () => import('@/views/ReaderView.vue'),
        props: true,
      },
    ]
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
  },
];

const router = new VueRouter({
  routes
});

export default router;
