import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterailCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Loader from '../../../assets/images/loadergif.gif'
import { styles } from './style'

const RestaurantItems = ({ data, loading }) => {
  console.log(loading)

  let checkIfExits = data?.map(item => {
    return item?.name
  })

  return (
    <>
      {loading ? (
        <View style={styles.loading}>
          <Image style={styles.loadingImage} source={Loader} />
        </View>
      ) : !checkIfExits ? (
        <Text style={styles.restaurantNotFound}>No Restaurant found</Text>
      ) : (
        data?.map(restaurant => (
          <TouchableOpacity activeOpacity={0.8} key={restaurant.id}>
            <View style={styles.restaurant}>
              <RestaurantImage image={restaurant.image_url} />
              <RestaurantInfo
                name={restaurant.name}
                rating={restaurant.rating}
              />
            </View>
          </TouchableOpacity>
        ))
      )}
    </>
  )
}

export default RestaurantItems

const RestaurantImage = ({ image }) => {
  const [favorite, setFavorite] = useState(false)
  return (
    <>
      <View style={styles.restaurantImageView}>
        <Image
          source={{
            uri: image
          }}
          style={styles.restaurantImage}
        />
        <TouchableOpacity
          onPress={() => setFavorite(!favorite)}
          style={styles.restaurantCard}
        >
          <MaterailCommunityIcons
            name='heart-outline'
            size={30}
            color={favorite ? 'red' : 'white'}
          />
        </TouchableOpacity>
      </View>
    </>
  )
}

const RestaurantInfo = ({ name, rating }) => {
  return (
    <View style={styles.restaurantInfoView}>
      <View>
        <Text style={styles.restaurantInfoNameText}>{name}</Text>
        <Text style={styles.restaurantInfoMin}>30-45. min</Text>
      </View>
      <View style={styles.restaurantRatingView}>
        <Text>{rating}</Text>
      </View>
    </View>
  )
}
