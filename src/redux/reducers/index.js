import { combineReducers } from 'redux'
import { restaurantReducer } from './restaurant'
import { loginReducers, usersReducers } from './users'

export default combineReducers({
  restaurantReducer,
  loginReducers,
  usersReducers
})
