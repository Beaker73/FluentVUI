import { createApp } from 'vue'
import App from './App.vue'
import plugin from  "fluent-vui"

const app = createApp(App);
app.use(plugin);
app.mount('#app')
