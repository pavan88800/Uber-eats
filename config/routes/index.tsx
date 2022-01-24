import React, { useEffect } from 'react'
import { Text } from 'react-native'
import Home from '../../src/screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Signup from '../../src/components/Signup'
import Login from '../../src/components/Login'
import { useSelector } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signout from '../../src/components/Signout'
import PushNotification from '../../src/components/PushNotification'
const Route = () => {
  const Stack = createNativeStackNavigator()
  const user  = useSelector(state  => state.loginReducers?.state)
  const Drawer = createDrawerNavigator()

  console.log(user?.state?.isAuthenticated, 'isAuthenticated')
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Login'
      >
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Signout' component={Signout} />

        <Drawer.Screen name='Login' component={Login} />
        <Drawer.Screen name='Signup' component={Signup} />
        <Drawer.Screen name='PushNotification' component={PushNotification} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Route
