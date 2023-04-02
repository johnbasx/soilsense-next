import 'i18next'
import type common from '/public/locales/en/common.json'
import type home from '/public/locales/en/home.json'
import type error from '/public/locales/en/error.json'

interface I18nNamespaces {
  common: typeof common
  home: typeof home
  error: typeof error
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: I18nNamespaces
  }
}
