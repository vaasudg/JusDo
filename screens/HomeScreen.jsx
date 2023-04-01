import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { HomeBanner } from '../assets'
import * as Animatable from 'react-native-animatable'
import { zoomOut } from '../utils/animation.utils'

const HomeScreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  return (
    <SafeAreaView className='bg-white flex flex-1'>
      <View className='flex-row px-5 mt-8  items-center space-x-2'>
        <View className='w-24 h-24 bg-black rounded-full justify-center items-center'>
          <Text className='text-white text-2xl font-semi-bold'>JusDO</Text>
        </View>
      </View>
      <View className='px-6 mt-8'>
        <Text className='text-primary-30 text-[50px] text-center p-1 font-bold'>JUSDO</Text>
        <Text className='text-primary-100 text-[25px] text-center'>Enjoy your TODO with fun</Text>
        <Text className='text-gray-300 text-center p-2'>
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        </Text>
      </View>
      <View className='flex justify-center w-full items-center'>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Animatable.View
            animation={'pulse'}
            easing={'ease-in-expo'}
            iterationCount={'infinite'}
            className='w-24 h-24 border-l-2 border-r-2 border-b-4 border-primary-40 rounded-full bg-primary-60 items-center justify-center mt-10'
          >
            <Text className='text-gray-300 text-[22px] font-bold'>Start</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
      <Animatable.View
        animation={zoomOut}
        easing={'ease-in-expo'}
        className='w-[300px] h-[300px] bg-primary-10 rounded-full absolute -top-32 -right-32 opacity-90'
      />
      <Animatable.View
        animation={zoomOut}
        duration={2000}
        easing={'ease-in-expo'}
        className='w-[250px] h-[250px] bg-primary-70 rounded-full absolute top-150 -right-32 opacity-80'
      />

      <View className='flex-1 relative justify-center items-center mt-10'>
        <Animatable.Image
          animation={'fadeIn'}
          easing={'ease-in-out'}
          source={HomeBanner}
          className='w-full h-full object-cover'
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
