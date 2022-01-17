import { REQUEST_RESTAURANT, GET_RESTAURANT, RESTAURANT_RESET } from '../types'

const initialState = {
  loading: false,
  restaurant: []
}

export const restaurantReducer = (state = initialState, action) => {
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
