<template>
  <BoxTask>
    <div class="columns">
      <div class="colum">
        {{ tarefa.descricao || "Tarefa sem descrição" }}
        <div class="column">
          <CronometroTrack :tempoEmSegundos="tarefa.duracaoEmSegundos" />
        </div>
      </div>
    </div>
  </BoxTask>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CronometroTrack from "./CronometroTrack.vue";
import ITarefa from "../interfaces/ITarefa";
import BoxTask from "./BoxTask.vue";

export default defineComponent({
  name: "TarefaFeita",
  components: {
    CronometroTrack,
    BoxTask,
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true,
    },
  },
});
</script>

<style scoped></style>
