<template>
  <div id="app">
    <section class="hero is-primary is-bold is-fullheight">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">VueJs Estudo 0.2</a>
            </div>
          </div>
        </nav>
      </div>
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="row">
            <div class="columns">
              <div class="column is-half is-offset-one-quarter">
                <todo-card @concluirTarefa=enviarTarefaConcluida ></todo-card>
                <br>
                <todo-card-complete :tarefa=tarefaapp></todo-card-complete>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <div class="container">
          <div class="content has-text-centered rodape">
            <p>
              <strong>VueJS Tutorial</strong> feito por
              <a href="http://github.com/kessiacastro">Késsia Castro</a>
              e incrementado por
              <a href="http://github.com/ayslanaragao">Ayslan Aragão</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import todoCard from './components/TodoCard'
import todoCardComplete from './components/TodoComplete/TodoCardComplete'

export default {
  name: 'app',
  components: {
    todoCard,
    todoCardComplete
  },
  data () {
    return {
      msg: 'Hello, World!',
      tarefaapp: []
    }
  },
  methods: {
    enviarTarefaConcluida (tarefa) {
      // alert(this.tarefaapp)
      // let tarefaConcluida = tarefa
      this.tarefaapp.push(tarefa)
    }
  }
}

</script>

<style>
.rodape {
  font-size: 10px;
}
</style>
