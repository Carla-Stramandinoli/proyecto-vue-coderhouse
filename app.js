const app = new Vue({
    el:"#app",
    data: {
        alumnosPrimero: [
            {
                nombre: "Olga Mayor",
                nota: 9
            },
            {
                nombre: "Alejo Acuña",
                nota: 6
            },
            {
                nombre: "Lorena Manso",
                nota: 10
            },
        ],
        alumnosSegundo: [
            {
                nombre: "Leonardo Serra",
                nota: 6
            },
            {
                nombre: "Axel Jimeno",
                nota: 4
            },
            {
                nombre: "Laura Trillo",
                nota: 8
            },
        ],
        alumnosTercero: [
            {
                nombre: "Mariano Orellana",
                nota: 5
            },
            {
                nombre: "Christian Arevalo",
                nota: 7
            },
            {
                nombre: "Emilia Fernndez",
                nota: 7
            },
        ],
        estilo1: ["table", "table-success"],
        estilo2: ["table", "table-dark"],
        estilo3: ["table", "table-striped"],
    }

})