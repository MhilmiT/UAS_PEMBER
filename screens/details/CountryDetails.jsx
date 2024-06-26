import { View, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { DescriptionText, HeightSpacer, NetworkImage, PopularList, ReusableText, WidthSpacer, PopularDestination } from '../../components';
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES, TEXT } from '../../constants/theme';
 
const CountryDetails = ({ navigation }) => {
  const country = {
    "_id": "1",
    "country": "Indonesia",
    "description": "Indonesia, an archipelago comprising over 17,000 islands, is a paradise for travelers seeking natural beauty, rich culture, and unforgettable adventures. Situated between the Indian Ocean and the Pacific Ocean, Indonesia offers a diverse range of stunning tourist destinations, from pristine white-sand beaches and majestic volcanoes to lush tropical rainforests. With Wisataku, you can discover all these wonders and more. Our app provides comprehensive and accurate information about local tourist spots throughout Indonesia.",
    "imageUrl": "https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kb25lc2lhfGVufDB8fDB8fHww",
    "popular": [
      {
        "_id": "1C",
        "title": "Dufan",
        "imageUrl": "https://images.unsplash.com/photo-1697797738337-3c9faa013240?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVmYW58ZW58MHx8MHx8fDA%3D",
        "rating": 4.7,
        "review": "990 Reviews",
        "location": "Jakarta, Indonesia"
      },
      {
        "_id": "2C",
        "title": "Bali Island",
        "imageUrl": "https://media.istockphoto.com/id/1783754915/id/foto/wanita-muda-berdiri-di-gerbang-candi-di-pura-lempuyang-luhur-di-bali-indonesia.jpg?s=612x612&w=0&k=20&c=abYDqwT8TLXLQyeziBjStUbZBJmwct60qmmTued4P18=",
        "rating": 4.9,
        "review": "990 Reviews",
        "location": "Bali, Indonesia"
      },
      {
        "_id": "3C",
        "title": "Ragunan Zoopark",
        "imageUrl": "https://media.istockphoto.com/id/1751429791/id/foto/zebra-bersantai-di-kebun-binatang-ragunan-jakarta-selatan.jpg?s=612x612&w=0&k=20&c=1wM-3Ba6fh85nAyzAKincIhPdPzRGmXnuQXi9X742ik=",
        "rating": 4.4,
        "review": "670 Reviews",
        "location": "Java, Indonesia"
      }
    ],
    "region": "Indonesia"
  };

  const route = useRoute();
  const { item } = route.params;
  console.log(item);

  return (
    <ScrollView style={styles.container}>
      <View>
        <NetworkImage
          source={country.imageUrl}
          width={"100%"}
          height={350}
          radius={30}
        />
        <AppBar
          color={COLORS.yellow}
          icon={"search1"}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>

      <View style={styles.description}>
        <ReusableText
          text={country.region}
          family={'Medium'}
          size={TEXT.xlarge}
          color={COLORS.black}
        />
        <DescriptionText text={country.description} />
        

        <View style={styles.popularSection}>
          <ReusableText
            text={"Popular Destination"}
            family={'Bold'}
            size={TEXT.large}
            color={"#00215E"}
          />
          <PopularDestination data={country.popular} />
        </View>
      </View>
    </ScrollView>
  );
}

export default CountryDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F8",
    marginHorizontal: 10
  },
  description: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
  popularSection: {
    alignItems: 'flex-start',
    marginTop: 20,
  }
});
