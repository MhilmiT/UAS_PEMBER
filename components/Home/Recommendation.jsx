import { FlatList, StyleSheet, Text, View, TouchableOpacity,} from "react-native"
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import reusable from '../Reusable/reusable.style';
import ReusableText from '../Reusable/ReusableText';
import { COLORS, SIZES, TEXT } from '../../constants/theme';
import ReusableTile from '../Reusable/ReusableTile';

const Recommendation = () => {
    const navigation = useNavigation();

    const recommendations=[
    {
        "_id": 1,
        "country_id": "1A",
        "title": "Dufan",
        "location": "Jakarta, Indonesia",
        "imageUrl": "https://images.unsplash.com/photo-1697797738337-3c9faa013240?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVmYW58ZW58MHx8MHx8fDA%3D",
        "rating": 4.7,
        "review": "900 Reviews"
    },
    {
        "_id": 2,
        "country_id": "2A",
        "title": "Eifel Tower",
        "location": "Seine, Paris",
        "imageUrl": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWlmZWwlMjB0b3dlcnxlbnwwfHwwfHx8MA%3D%3D",
        "rating": 4.9,
        "review": "800 Reviews"
    },
    {
        "_id": 3,
        "country_id": "3A",
        "title": "Borobudur Temple",
        "location": "Mid Java, Indonesia",
        "imageUrl": "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9yb2J1ZHVyfGVufDB8fDB8fHww",
        "rating": 4.5,
        "review": "500 Reviews"
    }
];

  return (
    <View style={styles.container}>
    <View style={[reusable.rowWithSpace('space-between'), {paddingBottom: 10}]}>
    <ReusableText
            text={'Recommendation'}
            family={'bold'}
            size={TEXT.large}
            color={COLORS.black}
          />
    

    </View>

    <FlatList 
    data={recommendations}
    horizontal
    keyExtractor={(item)=> item._id}
     contentContainerStyle={{columnGap: SIZES.medium}}
     showsHorizontalScrollIndicator={false}
     renderItem={({item})=> (
        <ReusableTile item={item} onPress={()=>navigation.navigate('Recommended', item._id)}/>
     )}
    />

    </View>
  )
}

export default Recommendation

const styles = StyleSheet.create({
    container: {
        paddingTop: 30
    }
})