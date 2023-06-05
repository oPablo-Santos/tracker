<template>
  <section>
    <router-link to="/projetos/novo" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo projeto</span>
    </router-link>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <th>{{ projeto.id }}</th>
          <th>{{ projeto.nome }}</th>
          <td>
            <router-link to="`/projetos/${projeto.id}`" class="button">
              <span class="icon is-small"> <i class="fas fa-penci-alt"></i> </span
            ></router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
export default defineComponent({
  name: "ListaPage",
  setup() {
    const store = useStore();
    return {
      projetos: computed(() => store.state.projetos),
    };
  },
});
</script>

