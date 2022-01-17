import React from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { auth } from '../../firebase'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/user'
const Signout = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const logouter = () => {
    try {
      auth.signOut().then(() => {
        navigation.navigate('Login')
        dispatch(logout())
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => logouter()}>
        <Text>Signout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Signout
