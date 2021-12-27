import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'

const items = [
  {
    image: require('../../assets/images/shopping-bag.png'),
    text: 'Pick Up'
  },
  {
    image: require('../../assets/images/soft-drink.png'),
    text: 'Soft Drinks'
  },
  {
    image: require('../../assets/images/bread.png'),
    text: 'Bakery Items'
  },
  {
    image: require('../../assets/images/fast-food.png'),
    text: 'Fast Foods'
  },
  {
    image: require('../../assets/images/deals.png'),
    text: 'Deals'
  }
]

const Categories = () => {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingVertical: 10
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((items, index = 1) => (
          <TouchableOpacity key={index}>
            <View
              style={{
                alignItems: 'center',
                marginRight: 30
              }}
            >
              <Image
                source={items?.image}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: 'contain'
                }}
              />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '900'
                }}
              >
                {items?.text}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default Categories
