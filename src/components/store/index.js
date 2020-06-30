import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);


Vue.axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";


export default new Vuex.Store({
    state: {
        users: []
    },
    actions:{
        loadUsers({commit}){
            Vue.axios.get('users')
                .then(result =>{
                    commit('SAVE_USERS', result.data)
                }).catch(error =>{
                    throw new Error(`${error}`);
            });
        }
    },
    mutations: {
        SAVE_USERS (state, users){
            state.users = users;
        }
    }
});

