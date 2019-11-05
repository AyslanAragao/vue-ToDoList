<template>
    <div class="row">
        <div class="columns">
            <div class="column">
                <div class="field is-grouped" :key="tarefa.description" v-for="(tarefa) in tarefasconcluidas">
                    <p class="control is-expanded checked">{{tarefa.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'todo-list-complete',
  props: ['tarefasconcluidas']
}
</script>

<style scoped>
.checked{
  text-decoration: line-through;
}
</style>
