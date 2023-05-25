import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewEditNote from '@/views/ViewEditNote.vue'
import ViewAuth from '@/views/ViewAuth.vue'

const routes = [
    {
        name: 'notes',
        path: '/',
        component: ViewNotes
    },
    {
        name: 'edit-note',
        path: '/editNote/:id',
        component: ViewEditNote
    },
    {
        name: 'stats',
        path: '/stats',
        component: ViewStats
    },
    {
        name: 'auth',
        path: '/auth',
        component: ViewAuth
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router