import React, { useState, useEffect, useRef , FC } from 'react'
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

const Home : FC =  () => {
  const dispatch = useDispatch()
  const { restaurant, loading } = useSelector((state:any) => state.restaurantReducer)
  const [active, setActive] = useState<string>('Delivery')
  const [location, setLocation] = useState<string>('New York')
  useEffect(() => {
    dispatch(getRestaurant(location))
  }, [dispatch, location])

  const data = restaurant?.businesses?.filter((business: { transactions: string | string[] })  => 
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
