import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewEditNote from '@/views/ViewEditNote.vue'

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
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router