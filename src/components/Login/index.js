import React, { useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../../firebase'
const Login = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    //check if all filed are filled
    if (email === '' || password === '') {
      return alert('Please fill all fields')
    } else {
      //sign in using the email and password
      auth
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          console.log(user, 'user')
          alert(' Login Successfully ')
          // navigate to home screen
          setTimeout(() => {
            return navigation.navigate('Home')
          }, 1500)
        })
        .catch(error => {
          return alert(error.message)
        })

      setEmail('')
      setPassword('')
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
      <View>
        <Text style={styles.loginText}>Log In</Text>
        <View style={styles.textInputView}>
          <TextInput
            style={styles.input}
            autoCapitalize='none'
            placeholder='Enter the Email'
            value={email}
            autoFocus={true}
            onChangeText={email => setEmail(email)}
          />
          <TextInput
            style={styles.input}
            placeholder='Enter the Password'
            autoCapitalize='none'
            secureTextEntry={true}
            value={password}
            onChangeText={password => setPassword(password)}
          />
          <TouchableOpacity
            style={{ alignSelf: 'center' }}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text>if you don't have an account singUp</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSubmit()}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login
