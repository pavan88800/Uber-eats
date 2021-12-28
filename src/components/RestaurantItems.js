import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterailCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { API_URL } from '@env'

const RestaurantItems = () => {
  const [restaurant, setRestaurant] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchResutaurant()
  }, [])
  console.log('datafetched')

  const fetchResutaurant = async () => {
    try {
      setLoading(true)
      // fetching API
      const restaurantData = await fetch(
        'https://api.yelp.com/v3/businesses/search?term=restaurants&location=LosAngeles&limit=25',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${API_URL}`
          }
        }
      )
      const restaurantJson = await restaurantData.json()
      setRestaurant(restaurantJson.businesses)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  return loading ? (
    <>
      {console.log('loading')}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 200
        }}
      >
        <Text
          style={{
            fontSize: 30,
            margin: 'auto',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          Loading...
        </Text>
      </View>
    </>
  ) : (
    restaurant.map(restaurant => (
      <TouchableOpacity activeOpacity={0.8} key={restaurant.id}>
        <View
          style={{
            marginTop: 10,
            padding: 15,
            backgroundColor: 'white',
            marginBottom: 20
          }}
        >
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      </TouchableOpacity>
    ))
  )
}

export default RestaurantItems

const RestaurantImage = ({ image }) => (
  <>
    <View style={{ marginBottom: 10 }}>
      <Image
        source={{
          uri: image
        }}
        style={{
          width: '100%',
          height: 200
        }}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 20,
          top: 20
        }}
      >
        <MaterailCommunityIcons name='heart-outline' size={30} color='white' />
      </TouchableOpacity>
    </View>
  </>
)

const RestaurantInfo = ({ name, rating }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ fontSize: 13, color: 'gray' }}>30-45. min</Text>
      </View>
      <View
        style={{
          backgroundColor: '#eee',
          height: 30,
          width: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15
        }}
      >
        <Text>{rating}</Text>
      </View>
    </View>
  )
}
