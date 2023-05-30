<template>
  <FormularioTrack @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <BoxTask v-if="listaEstaVazia"> você ainda tem muito a fazer hoje... </BoxTask>
    <TarefaFeita v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormularioTrack from "../components/FormularioTrack.vue";
import TarefaFeita from "../components/TarefaFeita.vue";
import ITarefa from "../interfaces/ITarefaFeita.vue";
import BoxTask from "../components/BoxTask.vue";

export default defineComponent({
  name: "App",
  components: {
    FormularioTrack,
    TarefaFeita,
    BoxTask,
  },
  data() {
    return {
      tarefas: [] as typeof ITarefa[],
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
  },
});
</script>
