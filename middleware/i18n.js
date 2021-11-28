import _ from 'lodash'
// import { mapState, mapGetters } from 'vuex'

export default function ({ isHMR, app, store, route, params, error, redirect }) {
  const defaultLocale = app.i18n.fallbackLocale
  console.debug('defaul local', defaultLocale)
  if (isHMR) return
  const locale = route.query.lang || defaultLocale
  if (_.indexOf(store.state.locales, locale) === -1) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }
  store.commit('mutations/SET_LANG', locale)
  app.i18n.locale = store.state.locale
}