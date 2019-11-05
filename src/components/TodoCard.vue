<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title has-text-left">{{hoje}}</p>
      <div class="has-text-right">
        <p class="card-header-title">{{tarefas.length}} {{lbtarefa}}</p>
      </div>
    </header>
    <div class="card-content">
      <div class="content">
       <todo-novo @novaTarefa="adicionarTarefa"></todo-novo>
      </div>
      <div class="content">
        <todo-list :tarefas="tarefas" @concluir="concluirTarefa" @remover="removerTarefa"></todo-list>
      </div>
    </div>
  </div>
</template>

<script>
import todoNovo from './TodoNovo'
import todoList from './TodoList'

export default {
  name: 'todo-card',
  components: {
    todoNovo,
    todoList
  },
  data () {
    return {
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
      tarefas: []
    }
  },
  computed: {
    hoje: function () {
      let novaData = new Date()
      return `${this.dias[novaData.getDay()]}, ${novaData.getDate()} de ${
        this.meses[novaData.getMonth()]
      }`
    },
    lbtarefa: function () {
      return `${this.tarefas.length > 1 ? 'Tarefas' : 'Tarefa'}`
    }
  },
  methods: {
    adicionarTarefa (tarefa) {
      let novaTarefa = { description: tarefa, checked: false }
      this.tarefas.push(novaTarefa)
    },
    checkTarefa (index) {
      this.tarefas[index]['checked'] = !this.tarefas[index]['checked']
    },
    removerTarefa (index) {
      this.tarefas.splice(index, 1)
    },
    concluirTarefa (tarefa) {
      this.$emit('concluirTarefa', tarefa)
    }
  }
}
</script>

<style>
.card {
  border-radius: 10px;
}
.card-header-title {
  color: #880202;
}
</style>
