import { View, TouchableOpacity} from "react-native"
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reusable.style'
import ReusableText from '../../components/Reusable/ReusableText'
import { COLORS, TEXT, SIZES } from '../../constants/theme'
import { AntDesign } from '@expo/vector-icons'
import styles from './home.style'
import HeightSpacer from '../../components/Reusable/HeightSpacer'
import { NearbyPlaces, Places, Recommendation} from '../../components'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={reusable.container}>
      <View>
        <View style={reusable.rowWithSpace('space-between')}>
          <ReusableText
            text={'Muhammad Hilmi'}
            family={'regular'}
            size={TEXT.large}
            color={COLORS.black}
          />
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('Search')}
          >
            <AntDesign 
              name="search1"
              size={26}
            />
          </TouchableOpacity>
        </View>

        <HeightSpacer height={SIZES.xLarge}/>

      <ReusableText
            text={'Places'}
            family={'bold'}
            size={TEXT.large}
            color={COLORS.black}
          />

        <Places />

      <HeightSpacer height={-20} />
      
       <Recommendation/>

       <HeightSpacer height={20} />

       <NearbyPlaces />


      </View>
    </SafeAreaView>
  )
}

export default Home
