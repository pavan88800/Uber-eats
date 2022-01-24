import { REQUEST_RESTAURANT, GET_RESTAURANT, RESTAURANT_RESET } from '../types'

interface State {
    loading: boolean,
    restaurant: []
}
const initialState : State = {
  loading : false,
  restaurant: []
}

export const restaurantReducer = (state = initialState, action : any)  => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_RESTAURANT:
      return {
        loading: true
      }
    case GET_RESTAURANT:
      return {
        loading: false,
        restaurant: payload
      }

    default:
      return {
        state
      }
  }
}
