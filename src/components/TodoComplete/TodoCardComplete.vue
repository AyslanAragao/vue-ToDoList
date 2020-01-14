<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title has-text-left"></p>
      <div class="has-text-right">
        <p class="card-header-title">{{this.$store.getters.tarefasConcluidas.length}} {{lbtarefa}}</p>
      </div>
    </header>
    <div class="card-content lado">
      <todo-list-complete :tarefasconcluidas=tarefa></todo-list-complete>
      <!-- <div class="separar"></div>
      <todo-list-complete :tarefasconcluidas=tarefa></todo-list-complete> -->
    </div>
  </div>
</template>

<script>
import TodoListComplete from './TodoListComplete'

export default {
  name: 'todo-card-complete',
  props: ['tarefa'],
  components: {
    TodoListComplete
  },
  data () {
    return {
      tarefasconcluidas: this.tarefa
    }
  },
  computed: {
    lbtarefa () {
      let retorno = ''
      if (this.$store.getters.tarefasConcluidas.length === 0) {
        retorno = 'Nenhuma Tarefa Concluida'
      } else if (this.$store.getters.tarefasConcluidas.length > 1) {
        retorno = 'Tarefas Concluidas'
      } else {
        retorno = 'Tarefa Concluida'
      }
      return `${retorno}`
    }
  }
}
</script>

<style scoped>
.lado {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.separar {
  border: 1px solid black;
  background: red;
  orientation: portrait;
}
</style>
