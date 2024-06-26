import { View, Image } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { TopBookings, TopTrips, TopInfo } from '../screens';
import { COLORS, SIZES } from '../constants/theme';
import { AppBar, HeightSpacer, NetworkImage, ReusableText } from '../components';
import styles from './topTab.style';


const Tab = createMaterialTopTabNavigator();
const TopTab = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: COLORS.lightWhite}}>
        
      <View>
        <NetworkImage 
        source={"https://images.unsplash.com/photo-1542902093-d55926049754?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBjaXR5fGVufDB8fDB8fHww"}
        width={'100%'}
        height={300}
        radius={0}
        />

        <AppBar
        top={40}
        left={20}
        right={20}
        color={COLORS.yellow}
        icon={"logout"}
        color1={COLORS.white}
        onPress={()=>{}}
        />

        <View style={styles.profile}>

        <Image source={{uri: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww"}}
        style={styles.image}
        />

        <HeightSpacer height={5}/>

        <View style={styles.name}>
          <View style={{alignItems: "center"}}>
          <ReusableText
        text={'Muhammad Hilmi'}
        size={SIZES.medium}
        color={COLORS.black}
        />
          </View>
        </View>

        <HeightSpacer height={5}/>

        <View>
        <View style={{alignItems: "center"}}>
          <ReusableText
        text={'muhammadhilmi1298@gmail.com'}
        size={SIZES.medium}
        color={COLORS.white}
        />
        </View>

        </View>


        </View>

      </View>    
        
        
     </View>
      <Tab.Navigator>
        <Tab.Screen name='Bookings' component={TopBookings}/>
        <Tab.Screen name='Trips' component={TopTrips}/>
        <Tab.Screen name='Info' component={TopInfo}/>
      </Tab.Navigator>
    </View>
  )
}

export default TopTab