Vue.component('componente-tabla', {
    props: {
        alumnos: Array,
        estilo: Array
    },
    template: /*html*/ `
        <div>
            <table :class="estilo">
                <thead :class="estilo">
                    <tr>
                        <th>Nombre</th>
                        <th>Nota</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(alumnos, index) of alumnos" :key="index">
                        <td>{{alumnos.nombre}}</td>
                        <td>{{alumnos.nota}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})