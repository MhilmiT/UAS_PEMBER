import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ReusableText from '../../Reusable/ReusableText'
import { TEXT, COLORS } from '../../../constants/theme'
import NetworkImage from '../../Reusable/NetworkImage'
import HeightSpacer from '../../Reusable/HeightSpacer'
import { useNavigation } from '@react-navigation/native'

const Country = ({item}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=> navigation.navigate("CountryDetails", {item})}>
        <View>

            <NetworkImage 
            source={item.imageUrl} width={85} height={85} radius={12}
            />
            <HeightSpacer height={5}/>

            <ReusableText
            text={item.country}
            family={'bold'}
            size={TEXT.medium}
            color={COLORS.black}
            align={"center"}
          />

        </View>
    </TouchableOpacity>
  )
}

export default Country