<template>
  <section class="is-flex is-align-items-center is-justify-content-space-between">
    <CronometroTrack :tempoEmSegundos="tempoEmSegundos" />
    <BotaoTrack
      @clicado="iniciar"
      icone="fas fa-play"
      texto="play"
      :desabilitado="cronometroRodando"
    />
    <BotaoTrack
      @clicado="finalizar"
      icone="fas fa-stop"
      texto="stop"
      :desabilitado="!cronometroRodando"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CronometroTrack from "./CronometroTrack.vue";
import BotaoTrack from "./BotaoTrack.vue";

export default defineComponent({
  name: "TemporizadorTrack",
  emits: ["aoTemporizadorFinalizado"],
  components: {
    CronometroTrack,
    BotaoTrack,
  },
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
      cronometroRodando: false,
    };
  },
  methods: {
    iniciar() {
      // começar a contagem
      // 1 seg = 1000 ms
      this.cronometroRodando = true;
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos += 1;
      }, 1000);
    },
    finalizar() {
      this.cronometroRodando = false;
      clearInterval(this.cronometro);
      this.$emit("aoTemporizadorFinalizado", this.tempoEmSegundos);
      this.tempoEmSegundos = 0;
    },
  },
});
</script>
