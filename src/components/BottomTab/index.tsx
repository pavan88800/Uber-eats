import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { styles } from './style'

// interface 
interface Props {
  name: string
  text: string
}
export const BottomTab: FC = () => {
  return (
    <View style={styles.viewContainer}>
      <FontAwesome name='home' text='Home' />
      <FontAwesome name='search' text='Browse' />
      <FontAwesome name='shopping-bag' text='Grocery' />
      <FontAwesome name='receipt' text='Orders' />
      <FontAwesome name='user' text='Account' />
    </View>
  )
}

const FontAwesome: FC<Props> = ({ name, text }) => {
  return (
    <View>
      <TouchableOpacity>
        <Icon name={name} size={25} style={styles.icon} />
        <Text style={styles.iconText}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}
