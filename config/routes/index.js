import React from 'react'
import { Text } from 'react-native'
import Home from '../../src/screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Route = () => {
  const Stack = createNativeStackNavigator()
  const Drawer = createDrawerNavigator()
  return (
    // <Text>Hello</Text>
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        {/* <Drawer.Screen name='Singup' component={Singup} /> */}
        <Drawer.Screen name='Home' component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Route
