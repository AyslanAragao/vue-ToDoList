<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title has-text-left"></p>
      <div class="has-text-right">
        <p class="card-header-title">{{tarefasconcluidas.length}} {{lbtarefa}}</p>
      </div>
    </header>
    <div class="card-content">
      <div class="content">
      </div>
      <div class="content">
        <todo-list-complete :tarefasconcluidas=tarefasconcluidas></todo-list-complete>
        </div>
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
      if (this.tarefasconcluidas.length === 0) {
        retorno = 'Nenhuma Tarefa Concluida'
      } else if (this.tarefasconcluidas.length > 1) {
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

</style>
