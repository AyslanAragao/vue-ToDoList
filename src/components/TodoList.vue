<template>
    <div class="row">
        <div class="columns">
            <div class="column">
                <div class="field is-grouped" v-bind:key="tarefa.description" v-for="(tarefa,index) in tarefas">
                    <p class="control">
                      <a class="button is-rounded is-small is-info is-light check-button" @click="concluir(tarefa), remover(index)">
                        <span class="icon is-smal">
                            <font-awesome-icon :icon="['fas', 'check']" />
                        </span>
                      </a>
                    </p>
                    <p class="control is-expanded" :class="{'checked':tarefa.checked}">{{tarefa.description}}</p>
                    <p class="control">
                      <a class="button is-rounded is-danger is-small" @click="remover(index)">
                          <span class="icon is-small">
                             <font-awesome-icon :icon="['fas', 'trash']" />
                          </span>
                      </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'todo-list',
  props: ['tarefas'],
  data () {
    return {}
  },
  methods: {
    check (index) {
      this.$emit('check', index)
    },
    remover (index) {
      this.$emit('remover', index)
    },
    concluir (tarefa) {
      this.$emit('concluir', tarefa)
    }
  }
}
</script>

<style scoped>
.checked{
  text-decoration: line-through;
}
</style>
