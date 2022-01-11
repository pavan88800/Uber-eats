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
const Signup = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = () => {
    // check password length
    if (password.length < 6) {
      return alert('Password must be at least 6 characters')
    }
    // check if password and confirm password are same
    if (password !== confirmPassword) {
      return alert('Password and confirm password are not same')
    }
    //check if all filed are filled
    if (email === '' || password === '' || confirmPassword === '') {
      return alert('Please fill all fields')
    } else {
      //sing up the email and password
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(_ => {
          alert('Successfully signup')
          // navigate to home screen
          setTimeout(() => {
            return navigation.navigate('Login')
          }, 1500)
        })
        .catch(error => {
          return alert(error.message)
        })

      setEmail('')
      setPassword('')
      setConfirmPassword('')
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
      <View>
        <Text style={styles.singUpText}>sign up</Text>
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
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder='Confirm the Password'
            value={confirmPassword}
            autoCapitalize='none'
            onChangeText={confirmPassword =>
              setConfirmPassword(confirmPassword)
            }
          />
          <TouchableOpacity
            style={{ alignSelf: 'center' }}
            onPress={() => navigation.navigate('Login')}
          >
            <Text>Already have an account? Login</Text>
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

export default Signup
