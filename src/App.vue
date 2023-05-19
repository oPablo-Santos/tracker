<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'modo-escuro': modoEscuroAtivo }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <FormularioTrack @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <TarefaFeita v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <BoxTask v-if="listaEstaVazia"> você ainda tem muito a fazer hoje... </BoxTask>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import FormularioTrack from "./components/FormularioTrack.vue";
import TarefaFeita from "./components/TarefaFeita.vue";
import ITarefa from "../interfaces/ITarefaFeita.vue";
import BoxTask from "./components/BoxTask.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    FormularioTrack,
    TarefaFeita,
    BoxTask,
  },
  data() {
    return {
      tarefas: [] as typeof ITarefa[],
      modoEscuroAtivo: false,
    };
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
  methods: {
    salvarTarefa(tarefa: typeof ITarefa) {
      this.tarefas.push(tarefa);
    },
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    },
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>
