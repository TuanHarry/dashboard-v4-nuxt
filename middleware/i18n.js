import _ from 'lodash'
// import { mapState, mapGetters } from 'vuex'

export default function ({ isHMR, app, store, route, params, error, redirect }) {
  const defaultLocale = app.i18n.fallbackLocale
  if (isHMR) return
  const locale = route.query.lang || defaultLocale || store.state.i18n.locale
  if (_.indexOf(store.state.i18n.locales, locale) === -1) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }
  store.commit('i18n/SET_LANG', locale)
  app.i18n.locale = store.state.i18n.locale
}