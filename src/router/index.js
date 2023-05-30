import {createRouter, createWebHistory} from 'vue-router'
import Layout from '@/views/Layout.vue'
import HomeView from '@/views/pages/HomePage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'LAYOUT',
            component: Layout,
            redirect: '/home',
            children: [
                {
                    path: 'home',
                    name: 'HOME',
                    component: HomeView
                }
            ]
        }
    ]
})

export default router
