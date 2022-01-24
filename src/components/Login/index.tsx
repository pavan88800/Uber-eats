import React, { FC, useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TextInput, Alert, Button, TouchableOpacity } from 'react-native'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
import { loginUser, logout } from '../../redux/actions/user'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../firebase'

const Login: FC = () => {
  const navigation: any = useNavigation()
  const user = useSelector((state: any) => state.loginReducers)
  const { loading, error } = user
  const dispatch = useDispatch()
  const [email, setEmail] = useState('pavan123@gmail.com')
  const [password, setPassword] = useState('123123')

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('Home')
        console.log(user.uid)
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  const handleSubmit = () => {
    //check if all filed are filled
    if (email === '' || password === '') {
      return Alert.alert('Please fill all fields')
    } else {
      dispatch(loginUser(email, password))
    }
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
        <Text style={styles.loginText}>Log In</Text>
        <View>
          {loading && (
            <Text
              style={{
                alignSelf: 'center',
                position: 'relative',
                paddingTop: 40,
              }}
            >
              Loading...
            </Text>
          )}
          {error && (
            <Text
              style={{
                alignSelf: 'center',
                position: 'relative',
                paddingTop: 40,
              }}
            >
              Email or Password is Incorrect
            </Text>
          )}
          <View style={styles.textInputView}>
            <TextInput
              style={styles.input}
              autoCapitalize='none'
              placeholder='Enter the Email'
              value={email}
              autoFocus={true}
              onChangeText={(email) => setEmail(email)}
            />
            <TextInput
              style={styles.input}
              placeholder='Enter the Password'
              autoCapitalize='none'
              secureTextEntry={true}
              value={password}
              onChangeText={(password) => setPassword(password)}
            />
            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => navigation.navigate('Signup')}>
              <Text>if you don't have an account singUp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default Login
