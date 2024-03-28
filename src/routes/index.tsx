import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { OnboardingScreen, HomeScreen, Camera, Map } from '../screens';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {

  const FakeIcon = () => {
    return null;
  };

  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="FakePage1"
          component={FakeIcon}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => <FontAwesome5 name="user-alt" size={25} color={focused ? '#04242f' : '#95A0BE'} />,
            tabBarShowLabel: false
          }}
        />
        <BottomTab.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{
            headerShown: false,
            tabBarStyle: { display: 'none' },
            tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="ticket-confirmation" size={25} color={focused ? '#04242f' : '#95A0BE'} />
          }}
        />
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="home-variant" size={25} color={focused ? '#04242f' : '#95A0BE'} />,
            tabBarShowLabel: false
          }}
        />
        <BottomTab.Screen
          name="FakePage2"
          component={FakeIcon}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="file" size={25} color={focused ? '#04242f' : '#95A0BE'} />,
            tabBarShowLabel: false
          }}
        />
        <BottomTab.Screen
          name="FakePage3"
          component={FakeIcon}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="bookmark" size={25} color={focused ? '#04242f' : '#95A0BE'} />,
            tabBarShowLabel: false
          }}
        />
        <BottomTab.Screen
          name="Camera"
          component={Camera}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: { display: 'none' },
            tabBarButton: () => null
          }}
        />
        <BottomTab.Screen
          name="Map"
          component={Map}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarButton: () => null
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

export default TabRoutes;
