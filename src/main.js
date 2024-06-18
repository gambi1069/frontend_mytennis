// main.js ou main.ts

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

// Importe o arquivo CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
// Importe o arquivo JS do Bootstrap (opcional, se precisar de funcionalidades específicas do Bootstrap que requerem JavaScript)
import 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
