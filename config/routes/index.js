import React from 'react'
import { Text } from 'react-native'
import Home from '../../src/screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Signup from '../../src/components/Signup'
import Login from '../../src/components/Login'

const Route = () => {
  const Drawer = createDrawerNavigator()
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Login'
      >
        <Drawer.Screen name='Signup' component={Signup} />
        <Drawer.Screen name='Login' component={Login} />
        <Drawer.Screen name='Home' component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Route
