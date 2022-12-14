<template>

    <div>
        <table class=" border border-4 table table-striped table-responsive">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Email</th>
                    <th>Telefono</th>
                </tr>
            </thead>
            <tbody id="mony">
                 <!-- @enviar="this.datos.push($event)" v-for="(datos, index) of datos" :key="index"
                    :nombre="datos.nombre" :edad="datos.edad" :email="datos.email" :telefono="datos.telefono" /> -->
                <tr v-for="(datos, index) of datos" :key="index">
                    <td>{{ datos.nombre }}</td>
                    <td>{{ datos.edad }}</td>
                    <td>{{ datos.email }}</td>
                    <td>{{ datos.telefono }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TablaFormulario',
    props: { 
        datos: Array,
    },
    methods: {
    }
};
</script>

<style scoped>
.border {
    width: 60%;
    margin: 5% auto;
}
</style>