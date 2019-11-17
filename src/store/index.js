import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: []
    },
    mutations: {
        setList(state, list) {
            state.list = list
        },
        removeItem(state,id) {
            state.list = state.list.filter(item => {
                return item.id != id
            })
        }
    },
    actions: {
        async destroyAction(context,id){
            await axios.delete(`http://localhost:4000/posts/${id}`)
            context.commit('removeItem', id)
        }
    }
})