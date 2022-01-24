import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  LOGOUT,
  RESTAURANT_RESET
} from '../types'
import { auth } from '../../firebase'
import { FC } from 'react'


export const registerUser = (email: string, password: string) => async (dispatch: (arg0: { type: string; payload?: unknown }) => void) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST
    })

    const { user } = await auth.createUserWithEmailAndPassword(email, password)
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: user
    })
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error
    })
  }
}

export const loginUser = (email: string, password: string) => async (dispatch: (arg0: { type: string; payload?: unknown }) => void) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    })
    const { user } = await auth.signInWithEmailAndPassword(email, password)

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: user
    })
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error
    })
  }
}

export const logout = () => async (dispatch: (arg0: { type: string; payload?: unknown }) => void) => {
  try {
    dispatch({
      type: LOGOUT
    })
    // dispatch({
    //   type: RESTAURANT_RESET
    // })
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error
    })
  }
}
