import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import HeaderTab from '../components/HeaderTab'
import SearchBar from '../components/SearchBar'
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
      <View style={{ backgroundColor: '#fff', padding: 15 }}>
        <HeaderTab />
        <SearchBar />
      </View>
    </SafeAreaView>
  )
}

export default Home
