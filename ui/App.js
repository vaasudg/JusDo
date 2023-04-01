import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerTitleAlign: 'center'
            // statusBarColor: '#ebaf04',
            // navigationBarColor: 'orange'
            // headerStyle: { backgroundColor: '#fcbc05' }
            // contentStyle: { backgroundColor: 'orange' }
          }}
        ></Stack.Screen>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{
            headerTitleAlign: 'center'
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
