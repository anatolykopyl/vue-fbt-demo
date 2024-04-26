import './assets/main.css'
import {fbtInit} from './i18n'

import { createApp } from 'vue'

import App from './App.vue'

fbtInit()

createApp(App).mount('#app')
