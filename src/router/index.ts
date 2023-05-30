import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TarefasPage from '../views/TarefasPage.vue'
import ProjetosPage from '../views/ProjetosPage.vue'

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: TarefasPage
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: ProjetosPage
    },
]


const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;