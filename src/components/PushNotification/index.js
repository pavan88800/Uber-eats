import React, { useState, useEffect, useRef } from 'react'
import { Text, View, SafeAreaView, Button, TextInput } from 'react-native'
import * as Notifications from 'expo-notifications'
import Constants from 'expo-constants'
import { styles } from './style'
const PushNotification = () => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false
    })
  })
  const [token, setToken] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [notification, setNotification] = useState(false)
  const notificationListener = useRef()
  const responseListener = useRef()

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setToken(token))

    notificationListener.current = Notifications.addNotificationReceivedListener(
      notification => {
        setNotification(notification)
      }
    )

    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      response => {
        console.log(response)
      }
    )
  }, [])

  async function sendPushNotification (token) {
    const message = {
      to: token,
      sound: 'default',
      title: title,
      body: description,
      data: { someData: 'goes here' }
    }

    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })
  }

  async function registerForPushNotificationsAsync () {
    let token
    if (Constants.isDevice) {
      const {
        status: existingStatus
      } = await Notifications.getPermissionsAsync()
      let finalStatus = existingStatus
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync()
        finalStatus = status
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!')
        return
      }
      token = (await Notifications.getExpoPushTokenAsync()).data
      console.log(token)
    } else {
      alert('Must use physical device for Push Notifications')
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C'
      })
    }

    return token
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
      }}
    >
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          style={styles.input}
          type='Enter the title'
          placeholder='Enter the title'
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          type='Enter the Description'
          placeholder='Enter the Description'
          onChangeText={text => setTitle(text)}
        />
      </View>
      <Button
        title='Press to Send Notification'
        onPress={async () => {
          await sendPushNotification(token)
        }}
      />
    </SafeAreaView>
  )
}

export default PushNotification
