import { StyleSheet,View,Image, ScrollView } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Registration, Signin } from '../screens'
import { COLORS } from '../constants/theme'
import { HeightSpacer } from '../components'

const Tab = createMaterialTopTabNavigator()

const AuthTopTab = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
    <ScrollView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
    
    <HeightSpacer height={80}/>

    <Image source={require('../assets/images/beach.jpg')}
    style={styles.image}
    />

    <View style={{height:600}}>
        <Tab.Navigator>
        <Tab.Screen name='Signin' component={Signin}/>
        <Tab.Screen name='Registration' component={Registration}/>
      </Tab.Navigator>
    </View>
      </ScrollView>
    </View>
  )
}

export default AuthTopTab

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 250,
        resizeMode: "contain"


    }
})