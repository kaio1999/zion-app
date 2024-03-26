import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../presentation/screens'
import { NavigationContainer } from '@react-navigation/native'

const BottomTabNavigator = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function TabRoutes() {
  return (
    // <NavigationContainer>
    //   {/* <BottomTabNavigator.Navigator></BottomTabNavigator.Navigator> */}
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{
    //         headerShown: false,
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <HomeScreen />
  )
}
