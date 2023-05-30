import {createApp} from 'vue'
import {Quasar} from 'quasar'
import App from './App.vue'
import router from './router'

// App
import './assets/main.css'

// Quasar
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

createApp(App)
    .use(router)
    .use(Quasar, {
        plugins: {}
    })
    .mount('#app')
