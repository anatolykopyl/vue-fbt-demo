import './assets/main.css'

import { createApp } from 'vue'
import { init } from 'fbt'

import translations from './translatedFbts.json'
import App from './App.vue'

init({
  translations,
  hooks: {
    getViewerContext: () => ({locale: 'en_US'}),
  }
})

createApp(App).mount('#app')
