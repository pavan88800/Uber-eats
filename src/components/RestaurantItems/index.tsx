import React, { useState, useEffect, FC } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterailCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Loader from '../../../assets/images/loadergif.gif'
import { styles } from './style'

interface restaurantItemProps {
  data: Array<any>
  loading: boolean
}
const RestaurantItems: FC<restaurantItemProps> = ({ data, loading}) => {
  let checkIfExits = data?.map((item) => {
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
        data?.map((restaurant: { id: null | undefined; image_url: string; name: string; rating: number }) => (
          <TouchableOpacity activeOpacity={0.8} key={restaurant.id}>
            <View style={styles.restaurant}>
              <RestaurantImage image={restaurant.image_url} />
              <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
            </View>
          </TouchableOpacity>
        ))
      )}
    </>
  )
}

export default RestaurantItems

interface imageProps {
  image: string
}
const RestaurantImage: FC<imageProps> = ({ image }) => {
  const [favorite, setFavorite] = useState(false)
  return (
    <>
      <View style={styles.restaurantImageView}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.restaurantImage}
        />
        <TouchableOpacity onPress={() => setFavorite(!favorite)} style={styles.restaurantCard}>
          <MaterailCommunityIcons name='heart-outline' size={30} color={favorite ? 'red' : 'white'} />
        </TouchableOpacity>
      </View>
    </>
  )
}

interface restaurantInfoProps {
  name: string
  rating: number
}

const RestaurantInfo: FC<restaurantInfoProps> = ({ name, rating }) => {
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
