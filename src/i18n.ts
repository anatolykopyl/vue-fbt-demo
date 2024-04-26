import type {IntlViewerContext} from "fbt"
import {ref} from 'vue'
import {init, IntlVariations} from "fbt"
import translations from "@/translatedFbts/ru_RU.json"

export const viewerContext = ref<IntlViewerContext>({
  locale: 'en_US',
  GENDER: IntlVariations.GENDER_UNKNOWN,
})

export const fbtInit = () => init({
  translations,
  hooks: {
    getViewerContext: () => viewerContext.value,
  }
})
