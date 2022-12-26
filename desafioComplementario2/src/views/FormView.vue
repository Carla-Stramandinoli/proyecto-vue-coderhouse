<template>
    <div class="about">
        <p>Bienvenido/a: {{ filter }} </p>
        <button class="btn btn-danger" @click="desloguear()">Log-out</button>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
    name: 'FormView',

    data() {
        return {
            nombre: ""
        };
    },
    created() {
        this.getApi()
    },
    computed: {
        ...mapGetters('moduloUsuarios', ['getNombreFormPosteado', 'getForm']),
        filter() {
            let list = this.getForm;
            list.forEach(element => {
                console.log(element);
                console.log(this.getNombreFormPosteado);
                return this.getNombreFormPosteado
            });
            return this.getNombreFormPosteado;
        }
    },
    methods: {
        ...mapActions('moduloUsuarios', ['getApi']),
        ...mapMutations('moduloUsuarios', ['desloguearUsuario']),
        desloguear(){
        this.desloguearUsuario();
        this.$router.push('/')
     }
    
    },
};
</script>
