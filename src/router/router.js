import { createRouter, createWebHistory } from "vue-router";

import Home from '@/view/Home.vue'
import Error404 from '@/view/Error404.vue'
import CategoriesIndex from '@/view/categories/CategoriesIndex.vue'
import CategoriesCreate from '@/view/categories/CategoriesCreate.vue'
import CategoriesUpdate from '@/view/categories/CategoriesUpdate.vue'

import TennisIndex from '@/view/tennis/TennisIndex.vue'
import TennisCreate from '@/view/tennis/TennisCreate.vue'
import TennisUpdate from '@/view/tennis/TennisUpdate.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/categories',
        name: 'CategoriesIndex',
        component: CategoriesIndex,
    },
    {
        path: '/categories/create',
        name: 'CategoriesCreate',
        component: CategoriesCreate,
    },
    {
        path: '/categories/:id',
        name: 'CategoriesUpdate',
        component: CategoriesUpdate,
    },
    {
        path: '/tennis',
        name: 'tennisIndex',
        component: TennisIndex,
    },
    {
        path:'/tennis/create',
        name: 'TennisCreate',
        component: TennisCreate,
    },
    {
        path:'/tennis/:id',
        name:'TennisUpdate',
        component: TennisUpdate,
    },
    {
        path: '/:catchAll(.*)',
        name: 'Error404',
        component: Error404,
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router