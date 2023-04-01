import { SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { zoomOut } from '../utils/animation.utils'
const Loader = () => {
  return (
    <SafeAreaView className='bg-white flex flex-1 flex-row'>
      <Animatable.View
        animation={zoomOut}
        easing={'ease-out-sine'}
        iterationCount={'infinite'}
        className='w-5 h-5 bg-primary-30 rounded-full'
      />
      <Animatable.View
        animation={zoomOut}
        easing={'ease-in-out'}
        iterationCount={'infinite'}
        className='w-5 h-5 bg-primary-30 rounded-full'
      />
      <Animatable.View
        animation={zoomOut}
        easing={'ease-in-out-sine'}
        iterationCount={'infinite'}
        className='w-5 h-5 bg-primary-30 rounded-full'
      />
    </SafeAreaView>
  )
}

export default Loader
