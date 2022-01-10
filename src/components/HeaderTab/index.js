import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'

const HeaderTab = ({ active, setActive }) => {
  const navigation = useNavigation()
  return (
    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon name='align-left' style={{ fontSize: 20, marginRight: 50 }} />
      </TouchableOpacity>
      <HeaderBotton text='Delivery' setActive={setActive} active={active} />
      <HeaderBotton text='PickUp' setActive={setActive} active={active} />
    </View>
  )
}
export default HeaderTab

const HeaderBotton = ({ text, setActive, active }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: active === text ? 'black' : '#fff',
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 30,
        marginHorizontal: 16
      }}
      onPress={() => setActive(text)}
    >
      <Text
        style={{
          color: active === text ? '#fff' : '#000',
          fontSize: 15,
          fontWeight: '900'
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}
