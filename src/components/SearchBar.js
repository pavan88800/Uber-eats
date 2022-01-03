import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
const SearchBar = () => {
  return (
    <View style={{ marginTop: 20, flexDirection: 'row' }}>
      <GooglePlacesAutocomplete
        placeholder='Search'
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
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details)
        }}
        query={{
          key: 'AIzaSyDJW2pjz2phtK4r9VzGZBwGGukdrR42nvc',
          language: 'en'
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name='location-sharp' size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 10,
              backgroundColor: '#fff',
              padding: 9,
              borderRadius: 30,
              alignItems: 'center'
            }}
          >
            <AntDesign
              name='clockcircle'
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  )
}

export default SearchBar