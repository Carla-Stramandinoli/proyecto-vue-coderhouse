<template>
    <div class="container">
     <form>
        <div class="form-group">
            <label for="user">Usuario:
                <input type="text" name="user" v-model="user" placeholder="Ingresa usuario">
            </label>
        </div>
        <div class="form-group">
            <label for="password">Contraseña:
                <input type="text" name="password" v-model="password" placeholder="Ingresa contraseña">
            </label>
        </div>
        <br>
        <button class="btn btn-primary">Log-in</button>
     </form>
   </div>
</template>

<script>
export default {
   name: 'UsuLog',
   props: {
     
   },
   data() {
     return {
       
     }
   },
   methods: {
     
   }
};
</script>

<style scoped>
</style>