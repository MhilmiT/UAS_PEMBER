import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import HotelCard from '../Tiles/Hotels/HotelCard'; 
import { useNavigation } from '@react-navigation/native';

const PopularDestination = ({ data }) => {
    const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item._id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <HotelCard item={item} margin={10} onPress={() => navigation.navigate('PlaceDetails', item._id) } />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
  }
});

export default PopularDestination;
