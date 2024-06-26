import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile, Chat, Location, Successful, Failed } from '../screens';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import TopTab from './TopTab';
import AuthTopTab from './AuthTopTab';



const Tab = createBottomTabNavigator();

const tabBarStyle = {
  paddingVertical: 10,  // Mengurangi padding vertikal untuk mengurangi ukuran kotak putih bagian atas dan bawah
  paddingHorizontal: 20,
  borderRadius: 20,
  height: 70, // Mengurangi tinggi tab bar
  position: "absolute",
  bottom: 20,
  left: 20,
  right: 20,
};

const iconContainerStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator 
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: '#EB6A58',
        tabBarInactiveTintColor: '#3E2465',
        tabBarStyle: tabBarStyle,
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={iconContainerStyle}>
              <Ionicons 
                name={focused ? "grid" : "grid-outline"}
                color={focused ? COLORS.yellow : COLORS.gray} 
                size={26}
              />
            </View>
          )
        }}
      />
      <Tab.Screen 
        name="Location" 
        component={Location} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={iconContainerStyle}>
              <Ionicons 
                name={focused ? "location" : "location-outline"}
                color={focused ? COLORS.yellow : COLORS.gray} 
                size={26}
              />
            </View>
          )
        }}
      />
      <Tab.Screen 
        name="Chat" 
        component={AuthTopTab} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={iconContainerStyle}>
              <Ionicons 
                name={focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"}
                color={focused ? COLORS.yellow : COLORS.gray} 
                size={26}
              />
            </View>
          )
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={TopTab} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={iconContainerStyle}>
              <Ionicons 
                name={focused ? "person" : "person-outline"}
                color={focused ? COLORS.yellow : COLORS.gray} 
                size={26}
              />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
