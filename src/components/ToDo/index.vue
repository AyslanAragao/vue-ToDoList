<template>
  <div class="hero-body">
        <div class="container has-text-centered">
          <div class="row">
            <div class="columns">
              <div class="column is-half is-offset-one-quarter">
                <todo-card></todo-card>
                <br>
                <todo-card-complete></todo-card-complete>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import todoCard from './TodoCard/TodoCard'
import todoCardComplete from './TodoComplete/TodoCardComplete'

export default {
  components: {
    todoCard,
    todoCardComplete
  },
  data () {
    return {
      tarefaapp: []
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
