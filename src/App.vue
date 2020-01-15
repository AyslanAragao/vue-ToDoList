<template>
  <div id="app">
    <section class="hero is-dark is-bold is-fullheight">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
                <img src="https://vuejs.org/images/logo.png" alt="Logo">
                V0.3
              </a>
              <a role="button" class="navbar-burger" @click="showNav = !showNav" :class="{'is-active': showNav}" aria-label="menu" aria-expanded="false" data-target="navMenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div id="navMenu" class="navbar-menu" :class="{'is-active': showNav}">
              <div class="navbar-end">
                <router-link to="/" class="navbar-item">Home</router-link>
                <router-link to="/ToDo" class="navbar-item" @click="showNav = !showNav">ToDo</router-link>
                <router-link to="/about" class="navbar-item">About</router-link>
                <!--<div class="navbar-item">
                  <div class="buttons">
                    <a class="button is-primary">
                      <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                      Log in
                    </a>
                  </div>
                </div>-->
              </div>
            </div>
          </div>
        </nav>
      </div>
      <!-- Hero content: will be in the middle -->
      <router-view></router-view>
      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <div class="container">
          <div class="content has-text-centered rodape">
            <p>
              VueJS Tutorial feito por
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
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      msg: 'Hello, World!',
      tarefaapp: [],
      showNav: false
    }
  },
  methods: {
  }
}

</script>

<style>
.rodape {
  font-size: 10px;
}
</style>
