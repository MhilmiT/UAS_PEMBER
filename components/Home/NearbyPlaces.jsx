import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import reusable from '../Reusable/reusable.style';
import ReusableText from '../Reusable/ReusableText';
import { COLORS, SIZES, TEXT } from '../../constants/theme';
import HotelCard from '../Tiles/Hotels/HotelCard';
import { useNavigation } from '@react-navigation/native';

const NearbyPlaces = () => {
  const navigation = useNavigation();
  const places = [
    {
      "_id": "1",
      "country_id": "1B",
      "title": "Dufan",
      "imageUrl": "https://images.unsplash.com/photo-1697797738337-3c9faa013240?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVmYW58ZW58MHx8MHx8fDA%3D",
      "rating": 4.7,
      "review": "300 Reviews",
      "location": "Jakarta, Indonesia",
    },
    {
      "_id": "2",
      "country_id": "2B",
      "title": "Pamulang Night M",
      "imageUrl": "https://media.istockphoto.com/id/1412045138/id/foto/pasar-malam-phuket-walking-street-di-phuket.jpg?s=612x612&w=0&k=20&c=I_uZTXRWh3qVqSQgwuBO-9Yu9naI2yIcB9z7MQ5RvTw=",
      "rating": 4.3,
      "review": "420 Reviews",
      "location": "Jakarta, Indonesia",
    },
    {
      "_id": "3",
      "country_id": "3B",
      "title": "JungleLand",
      "imageUrl": "https://media.istockphoto.com/id/2152274530/id/foto/wahana-ayunan-ontang-anting-dufan-ancol-yang-terkenal-ditangkap-dalam-mendebarkan.jpg?s=612x612&w=0&k=20&c=m2Il3eC_uzprArvjs8vGmXZeixXIX69kO3snj1VOlv8=",
      "rating": 4.9,
      "review": "898 Reviews",
      "location": "Bogor, Indonesia",
    },
  ];

  return (
    <View>
      <View style={[reusable.rowWithSpace('space-between'), { paddingBottom: 10 }]}>
        <ReusableText
          text={'Nearby Places'}
          family={'bold'}
          size={TEXT.large}
          color={COLORS.black}
        />
      </View>

      <FlatList 
        data={places}
        horizontal
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        renderItem={({ item }) => (
          <HotelCard 
            item={item} 
            margin={10} 
            onPress={() => navigation.navigate("NearbyDetails")} 
          />
        )}
      />
    </View>
  );
};

export default NearbyPlaces;

const styles = StyleSheet.create({});
