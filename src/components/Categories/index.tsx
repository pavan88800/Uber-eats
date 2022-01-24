import React, { FC } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { items } from '../data'
import { styles } from './style'
const Categories: FC = () => {
  return (
    <View style={styles.viewContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((items, index = 1) => (
          <TouchableOpacity key={index}>
            <View style={styles.categoryText}>
              <Image source={items?.image} style={styles.categoryImage} />
              <Text style={styles.categoryFont}>{items?.text}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default Categories
