<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <FormularioTrack />
      <!-- Lista de Tarefas ???? -->
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import FormularioTrack from "./components/FormularioTrack.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    FormularioTrack,
  },
});
</script>

<style></style>
