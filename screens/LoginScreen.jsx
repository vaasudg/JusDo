import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
// import * as Animatable from 'react-native-animatable'
import Loader from '../components/Loader'

const LoginScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  return (
    <SafeAreaView className='bg-white flex flex-1'>
      <Text>Login screen</Text>
      <Loader />
    </SafeAreaView>
  )
}

export default LoginScreen
