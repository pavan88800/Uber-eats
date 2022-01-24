import React, { FC, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/FontAwesome5'
import * as Location from 'expo-location'
import { styles } from './style'

interface Props {
  setLocation: (value: string) => void
}
const SearchBar : FC <Props> = ({ setLocation }) => {
  // const [lat, setLat] = useState(null)
  // const [long, setLong] = useState(null)
  // const [errorMsg, setErrorMsg] = React.useState(null)

  //  find current Location
  // const findCurrentLocation = async () => {
  //   let { status } = await Location.requestForegroundPermissionsAsync()
  //   if (status !== 'granted') {
  //     setErrorMsg('Permission to access location was denied')
  //     return
  //   }
  //   let location = await Location.getCurrentPositionAsync({})
  //   setLat(location.coords.latitude)
  //   setLong(location.coords.longitude)
  // }

  // let text = 'Waiting..'
  // if (errorMsg) {
  //   text = errorMsg
  // }

  return (
    <View style={styles.searchBarView}>
      {/* <GooglePlacesAutocomplete
        autoFocus={true}
        placeholder='Search'
        debounce={100}
        onPress={(data, details = null) => {
          setLocation(details.description.split(',')[0])
        }}
        onFail={error => console.error(error)}
        enablePoweredByContainer={false}
        // it's built in style
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            marginTop: 7,
            fontWeight: '700'
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10
          }
        }}
        renderLeftButton={() => (
          <View style={styles.renderLeftButton}>
            <Ionicons name='location-sharp' size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.renderRightButton}>
            <AntDesign
              name='clockcircle'
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
      <TouchableOpacity
        onPress={() => findCurrentLocation()}
        style={{ marginTop: 20 }}
      >
        <Icon
          name='map-marker-alt'
          style={{ fontSize: 20, alignItems: 'center' }}
        />
        {errorMsg && alert(text)}
        <Text>{lat}</Text>
        <Text>{long}</Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default SearchBar
