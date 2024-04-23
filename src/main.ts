import './assets/main.css'

import { createApp } from 'vue'
import {init, IntlVariations, type IntlViewerContext} from 'fbt'

import translations from './translatedFbts.json'
import App from './App.vue'

const viewerContext: IntlViewerContext = {
  locale: 'en_US',
  GENDER: IntlVariations.GENDER_UNKNOWN,
}

init({
  translations,
  hooks: {
    getViewerContext: () => viewerContext,
  }
})

createApp(App).mount('#app')
