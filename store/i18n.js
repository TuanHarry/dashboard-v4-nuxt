import _ from 'lodash'

export const state = () => ({
  locales: ['en', 'vi'],
  locale: 'en',
});

export const mutations = {
  SET_LANG(state, locale) {
    if (_.indexOf(state.locales, locale) !== -1) {
      state.locale = locale;
    }
  },
};
