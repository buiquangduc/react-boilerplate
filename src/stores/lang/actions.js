import { CHANGE_LANGUAGE } from './action-types'

export const changeLanguage = (lang) => async dispatch => {
  dispatch({
    type: CHANGE_LANGUAGE,
    payload: lang
  })
}
