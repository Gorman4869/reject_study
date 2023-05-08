import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Tree from './components/Tree.vue'



import './assets/main.css'

const app = createApp(App)

app.component('Tree',Tree)
app.use(createPinia())
app.use(router)

app.mount('#app')
