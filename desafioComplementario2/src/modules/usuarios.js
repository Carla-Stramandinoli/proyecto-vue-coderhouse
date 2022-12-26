export default {
    namespaced: true,
    state: {
        nombreFormPosteado: null,
        listaFormularios: []
    },
    getters: {
        getNombreFormPosteado(state) {
            return state.nombreFormPosteado;
        },
        getForm(state) {
            if (state.listaFormularios !== undefined)
                return state.listaFormularios;
            else{
                return [];
            }
        }
    },
    mutations: {
        cargarFormularios(state, usuariosApi) {
            state.listaFormularios = usuariosApi;
        },
        guardarNombreFormPosteado(state, nombreFormPosteado) {
            state.nombreFormPosteado = nombreFormPosteado;
        },
        desloguearUsuario(state) {
            state.nombreFormPosteado = null;
          }
    },
    actions: {
        getApi: async function ({ commit }) {
            const data = await fetch("https://639f79eb5eb8889197fd60c9.mockapi.io/formulario");
            const listaFormularios = await data.json();
           console.log(listaFormularios);
            commit('cargarFormularios', listaFormularios);
        }
    }
}