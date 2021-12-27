import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
const HeaderTab = () => {
  const [active, setActive] = useState('Delivery')
  return (
    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
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
