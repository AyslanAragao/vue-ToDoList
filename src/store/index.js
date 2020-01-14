import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    dias: [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sabado'
    ],
    meses: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Março',
      'Junho',
      'Junlho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    tarefas: [],
    tarefasapp: []
  },
  mutations: {
    adicionarTarefa (state, payload) {
      state.tarefas.push(payload)
    },
    adicionarTarefaConcluida (state, payload) {
      state.tarefasapp.push(payload)
    },
    removerTarefaConcluida (state, index) {
      state.tarefas.splice(index, 1)
    }
  },
  actions: {
    adicionarTarefaAction ({ commit }, payload) {
      commit('adicionarTarefa', payload)
    },
    adicionarTarefaConcluidaAction ({ commit }, payload) {
      commit('adicionarTarefaConcluida', payload)
    },
    removerTarefaConcluidaAction ({ commit }, index) {
      commit('removerTarefaConcluida', index)
    }
  },
  getters: {
    tarefas (state) {
      return state.tarefas
    },
    tarefasConcluidas (state) {
      return state.tarefasapp
    }
  }
})
