import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import { ReusableTile } from '../../components';
import { COLORS } from '../../constants/theme';
import reusable from '../../components/Reusable/reusable.style';

const TopBookings = () => {
  const hotel = [
    {
      "_id": "1",
      "country_id": "1D",
      "title": "Discover Hotel",
      "description": "Discover Hotel, situated in the heart of Jakarta, offers an unparalleled lodging experience that combines modern luxury with warm hospitality. Elegantly designed, the hotel provides easy access to the city's main attractions, including the National Monument (Monas) and Taman Mini Indonesia Indah. With top-notch amenities such as gourmet dining and a fully equipped fitness center, Discover Hotel is the perfect choice for business travelers and tourists seeking a remarkable stay in Indonesia's bustling capital.",
      "contact": "08193849249",
      "imageUrl": "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
      "rating": 4.6,
      "review": "1000 Reviews",
      "location": "Jakarta, Indonesia",
    },
    {
      "_id": "2",
      "country_id": "2D",
      "title": "Moana Hotel",
      "description": "Discover Hotel, situated in the heart of Jakarta, offers an unparalleled lodging experience that combines modern luxury with warm hospitality. Elegantly designed, the hotel provides easy access to the city's main attractions, including the National Monument (Monas) and Taman Mini Indonesia Indah. With top-notch amenities such as gourmet dining and a fully equipped fitness center, Discover Hotel is the perfect choice for business travelers and tourists seeking a remarkable stay in Indonesia's bustling capital.",
      "contact": "08193849249",
      "imageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "rating": 4.3,
      "review": "500 Reviews",
      "location": "Jakarta, Indonesia",
    },
    {
      "_id": "3",
      "country_id": "3D",
      "title": "Lalala Hotel",
      "description": "Discover Hotel, situated in the heart of Jakarta, offers an unparalleled lodging experience that combines modern luxury with warm hospitality. Elegantly designed, the hotel provides easy access to the city's main attractions, including the National Monument (Monas) and Taman Mini Indonesia Indah. With top-notch amenities such as gourmet dining and a fully equipped fitness center, Discover Hotel is the perfect choice for business travelers and tourists seeking a remarkable stay in Indonesia's bustling capital.",
      "contact": "08193849249",
      "imageUrl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "rating": 4.4,
      "review": "100 Reviews",
      "location": "Jakarta, Indonesia",
    }
  ];

  return (
    <View style={{ margin: 20 }}>
      <FlatList
        data={hotel}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={{backgroundColor: COLORS.lightWhite, marginBottom: 10, borderRadius:16}}>
            <ReusableTile item={item} />

            <View style={reusable.rowWithSpace('space-between')}>

            </View>
          </View>
        )}
      />
    </View>
  );
};

export default TopBookings;

const styles = StyleSheet.create({});