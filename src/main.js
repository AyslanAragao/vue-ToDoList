import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { store } from './store'

library.add(faPlus, faTrash, faCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  store
}).$mount('#app')
