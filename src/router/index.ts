import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TarefasPage from "../views/TarefasPage.vue";
import ProjetosPage from "../views/ProjetosPage.vue";
import FormPage from "../views/Projetos/FormPage.vue";
import ListaPage from "../views/Projetos/ListaPage.vue";

const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tarefas",
    component: TarefasPage,
  },
  {
    path: "/projetos",
    component: ProjetosPage,
    children: [
      {
        path: "",
        name: "Projeto",
        component: ListaPage,
      },
      {
        path: "novo",
        name: "Novo projeto",
        component: FormPage,
      },
      {
        path: ":id",
        name: "Editar Projeto",
        component: FormPage,
        props: true,
      },
    ],
  },
];

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
});

export default roteador;
