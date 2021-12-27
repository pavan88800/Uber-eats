import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterailCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const RestaurantItems = () => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View
        style={{
          marginTop: 10,
          padding: 15,
          backgroundColor: 'white',
          marginBottom: 20
        }}
      >
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantItems

const RestaurantImage = () => (
  <>
    <View style={{ marginBottom: 10 }}>
      <Image
        source={{
          uri:
            'https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb'
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

const RestaurantInfo = () => {
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
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
          Farmhouse Kitcher Tahi Cuisine
        </Text>
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
        <Text>4</Text>
      </View>
    </View>
  )
}
