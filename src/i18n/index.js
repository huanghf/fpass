import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const locales = ['en', 'zh-CN']

export const i18n = new VueI18n({
  locale: locales[0],
  messages: locales.reduce((obj, locale) => (obj[locale] = require(`./${locale}.json`), obj), {})
})
