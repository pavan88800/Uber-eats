import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../../components/Categories'
import HeaderTab from '../../components/HeaderTab'
import RestaurantItems from '../../components/RestaurantItems'
import SearchBar from '../../components/SearchBar'
import { BottomTab } from '../../components/BottomTab'
import { getRestaurant } from '../../redux/actions/restaurant'
import { useDispatch, useSelector } from 'react-redux'
import 'react-native-gesture-handler'
import { styles } from './style'

const Home = () => {
  const dispatch = useDispatch()
  const { restaurant, loading } = useSelector(state => state.restaurantReducer)
  const [active, setActive] = useState('Delivery')
  const [location, setLocation] = useState('New York')

  useEffect(() => {
    dispatch(getRestaurant(location))
  }, [location, dispatch, location])

  console.log(restaurant?.businesses?.length, 'length')

  //   if (restaurant?.businesses?.error?.code === 'LOCATION_NOT_FOUND') {
  //     alert('No Restaurant Found')
  //   }
  //   console.log(
  //     restaurant?.businesses?.error?.code === 'LOCATION_NOT_FOUND',
  //     'error'
  //   )
  const data = restaurant?.businesses?.filter(business =>
    business?.transactions?.includes(active?.toLowerCase())
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchView}>
        <HeaderTab active={active} setActive={setActive} />
        <SearchBar setLocation={setLocation} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems data={data} loading={loading} />
      </ScrollView>
      <BottomTab />
    </SafeAreaView>
  )
}

export default Home
