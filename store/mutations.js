import _ from 'lodash'
import initialState from './state'


export default {
  RESET_STORE: (state) => {
    console.log(`call RESET_STORE`)
    Object.assign(state, initialState())
  },

  SET_LANG: (state, lang) => {
    console.log(`call SET_LANG`)
    if (_.indexOf(state.locales, lang) !== -1) {
      state.locale = lang
    }
  }
}
