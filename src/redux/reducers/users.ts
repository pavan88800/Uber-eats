import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  LOGOUT
} from '../types'

interface State {
  loading: boolean,
  userInfo: any,

}
const initialState : State = {
  loading : false,
  userInfo: {}, 
}

export const usersReducers = (state = initialState, action : any) => {
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


interface StateLogin {
  loading: boolean,
  isAuthenticated: boolean,
  userInfo: any,

}

const initialStateLogin: StateLogin = {
  loading : false,
  isAuthenticated: false,
  userInfo: {}, 
}


export const loginReducers = (state = initialStateLogin, action : any) => {
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
