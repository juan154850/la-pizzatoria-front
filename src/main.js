import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPizzaSlice, faBurger, faBars } from '@fortawesome/free-solid-svg-icons'


library.add(faPizzaSlice, faBurger, faBars)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store).mount('#app')
