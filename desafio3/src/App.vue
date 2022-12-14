<template>
  <div id="app">
    <HelloWorld msg="Formulario desafio 3" />
    <formulario-componente @enviar="datos.push($event)" />
    <tabla-formulario :datos="datos"/>
  </div>
</template>

<script>
import FormularioComponente from './components/FormularioComponente.vue'
import TablaFormulario from './components/TablaFormulario.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    FormularioComponente,
    TablaFormulario
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
