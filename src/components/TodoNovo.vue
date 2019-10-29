<template>
  <div class="row">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
          <div class="field is-grouped">
              <p class="control is-expanded">
                  <input class="input is-primary has-text-centered"
                  type="text"
                  placeholder="NovaTarefa..."
                  v-model="tarefa"/>
              </p>
              <p class="control">
                  <a class="button is-primary add-button" @click="enviarTarefa">
                      <span class="icon is-small">
                            <font-awesome-icon :icon="['fas', 'plus']" />
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
  name: 'todo-novo',
  data () {
    return {
      tarefa: ''
    }
  },
  methods: {
    enviarTarefa () {
      if (this.tarefa !== '') {
        this.$emit('novaTarefa', this.tarefa)
      }
      this.tarefa = ''
    }
  }

}
</script>

<style scoped>
.input {
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-radius: 0;
  outline: none;
  border-bottom-width: 2px;
  box-shadow: none;
}
.input.is-primary:focus {
  box-shadow: none;
}
.add-button {
  border-radius: 50%;
}
</style>
