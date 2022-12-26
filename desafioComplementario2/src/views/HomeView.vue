<template>
  <div id="app">
    <HelloWorld msg="Formulario desafio 3" />
      <formulario-componente />
  </div>
</template>

<script>
import FormularioComponente from '../components/FormularioComponente.vue'
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    FormularioComponente,
  },
  data() {
    return {
      datos: []
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>


