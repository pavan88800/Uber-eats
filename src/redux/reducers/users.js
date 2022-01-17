import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  LOGOUT
} from '../types'

export const usersReducers = (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true
      }
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: payload
      }

    case LOGOUT:
      return {}

    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: payload
      }
    default:
      return {
        state
      }
  }
}

export const loginReducers = (state = {}, action) => {
  const { type, payload } = action
  console.log(state, 'isAuthenticated from reducer')
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
        isAuthenticated: false
      }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: payload,
        isAuthenticated: true
      }

    case LOGOUT:
      return {}

    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: payload,
        isAuthenticated: false
      }

    default:
      return {
        state
      }
  }
}
