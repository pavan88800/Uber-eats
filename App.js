import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import store from './src/redux/config.store'
import Routes from './config/routes/index'
export default function App () {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}
