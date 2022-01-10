import { REQUEST_RESTAURANT, GET_RESTAURANT } from '../types'
import { YELP_API_KEY } from '@env'
console.log(YELP_API_KEY)
export const getRestaurant = location => async dispatch => {
  try {
    dispatch({
      type: REQUEST_RESTAURANT
    })

    const restaurantData = await fetch(
      `${process.env.YELP_API}=${location}&limit=25`,

      {
        crossDomain: true,
        mode: 'cors',
        method: 'GET',
        credentials: 'include',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': YELP_API_KEY,
        'Access-Control-Allow-Origin': '*',
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`
        }
      }
    )
    const restaurantJson = await restaurantData.json()

    dispatch({
      type: GET_RESTAURANT,
      payload: restaurantJson
    })
  } catch (err) {
    console.log(err)
  }
}
