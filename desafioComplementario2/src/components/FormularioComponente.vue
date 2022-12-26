<template>
    <div>
        <div class="form-position p-3 ">
            <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(validarFormulario)" id="formulario">
                    <div class="row">
                        <div class="col col-10 content">
                            <br><br>
                            <ValidationProvider name="nombre" rules="alpha|required" v-slot="{ errors }">
                                <!-- nombre -->
                                <label for="inputNombre" class="text-start">Nombre:</label>
                                <input v-model="datos.nombre" type="text" class="form-control" id="Nombre"
                                    placeholder="Nombre">
                                <br>
                                <span>{{ errors[0] }}</span>
                            </ValidationProvider>
                            <br>
                            <ValidationProvider name="edad" rules="required|numeric" v-slot="{ errors }">
                                <!-- edad -->
                                <label for="inputEdad" class="form-label text-start">Edad:</label>
                                <input v-model="datos.edad" class="form-control" id="Edad" placeholder="Edad">
                                <br>
                                <span>{{ errors[0] }}</span>
                            </ValidationProvider>
                            <br>
                            <!-- email -->
                            <ValidationProvider rules="required|email" v-slot="{ errors }">
                                <label for="inputEmail" class="form-label text-start">Email:</label>
                                <input v-model="datos.email" type="text" class="form-control" id="Email"
                                    placeholder="tu@email.com">
                                <br>
                                <span>{{ errors[0] }}</span>
                            </ValidationProvider>
                            <br>
                            <ValidationProvider name="telefono" rules="digits:10|required" v-slot="{ errors }">
                                <!-- contacto -->
                                <label for="inputPhone" class="form-label text-start">Telefono de contacto:</label>
                                <input v-model="datos.telefono" type="number" class="form-control" id="Telefono"
                                    placeholder="numero de telefono">
                                <br>
                                <span>{{ errors[0] }}</span>
                            </ValidationProvider>
                            <br>
                        </div>
                        <!-- submit -->
                        <div class="col-3">
                            <button @submit.prevent="validarFormulario()" type="submit"
                                class="btn-style btn btn-primary">Enviar</button>
                        </div>
                    </div>
                </form>
            </ValidationObserver>
        </div>
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, email, alpha, digits, numeric } from 'vee-validate/dist/rules';
import axios from 'axios';
import { mapMutations } from 'vuex';

extend('email', email);

extend('required', {
    ...required,
    message: 'Este campo es obligatorio.',
});

extend('alpha', {
    ...alpha,
    message: 'El campo {_field_} solo puede contener letras.'
});

extend('numeric', {
    ...numeric,
    validate: value => {
        return !isNaN(value)
    },
    message: 'El campo {_field_} debe contener numeros.'
});

extend('digits', {
    ...digits,
    message: 'El campo {_field_} debe contener 10 digitos numericos.'
});

export default {
    name: 'FormularioComponente',
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    data() {
        return {
            datos: [
                {
                    nombre: "",
                    edad: null,
                    email: "",
                    telefono: null
                }
            ]
        }
    },
    methods: {
        ...mapMutations('moduloUsuarios',['guardarNombreFormPosteado']),
        validarFormulario() {
            alert("Formulario enviado!");
            const newUsuario = {
                name: this.datos.nombre,
                age: this.datos.edad,
                mail: this.datos.email,
                phone: this.datos.telefono
            }
            const URLPOST = "https://639f79eb5eb8889197fd60c9.mockapi.io/formulario";
            const request = axios({
                method: "POST",
                url: URLPOST,
                data: newUsuario,
            })
            let thisComponente = this;
            request.then(function (response) {
                console.log(response.data);
                thisComponente.guardarNombreFormPosteado(newUsuario.name);
                thisComponente.$router.push('/form');
             });
            setTimeout(() => {
                Object.assign(this.$data, this.$options.data());
            }, 2000);
        }
    },
}

</script>

<style scoped>
span {
    color: rgb(239, 4, 4)
}

.form-position {
    font-size: 20px;
    background-color: #8dc2f4;
    margin: 0 auto;
    width: 50%;
    border-radius: 3%;
}

.content {
    margin: 0 auto;
}

label {
    color: #0f467a;
}

input {
    height: 7%;
    border-color: #0f467a;
    margin: 0px 0px -10px 0px;
}

.btn-style {
    padding: 5px 100%;
    margin: 7% 0px 0px 105%;
}
</style>