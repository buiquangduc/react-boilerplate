import { CHANGE_LANGUAGE } from './action-types'
import { INITIAL_STATE } from './initialState'

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action

  switch (type) {
    case CHANGE_LANGUAGE:
      return payload
    default:
      return state
  }
}
