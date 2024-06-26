import { View, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { DescriptionText, HeightSpacer, NetworkImage, PopularList, ReusableText} from '../../components';
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES, TEXT } from '../../constants/theme';


const Recommended = ({ navigation }) => {
  const route = useRoute();
  const id = route.params; 

  const recommended = {
    "_id": "1",
    "country_id": "1C",
    "imageUrl": "https://images.unsplash.com/photo-1697797738337-3c9faa013240?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVmYW58ZW58MHx8MHx8fDA%3D",
    "rating": 4.7,
    "review": "900 Reviews",
    "latitude": 40.68738,
    "location": "Dufan",
    "description": "The Dunia Fantasi project was launched in early 1980 where at that time Taman Impian Jaya Ancol was still under the leadership of Mr. Handogo Soekarno who served as head of the promotion division of Taman Impian Jaya Ancol. At that time, Handogo gave Benny Benhardi the mandate to create illustrations using Birds Eye View. This work was made at the Balai Samudra Architecture office under the direction of Mr. Sutisna and senior architect Budi Priambodo and several draftsmen.Initially, the caricatural shape of the proboscis monkey was visualized by Matari Advertising who participated in the initial communication program Dunia Fantasi.",
    "popular": [
      {
        "_id": "1",
        "title": "Discovery Hotel",
        "imageUrl": "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
        "rating": 4.6,
        "review": "1000 Reviews",
        "location": "Jakarta, Indonesia"
      },
      {
        "_id": "2",
        "title": "Mercusuar Hotel",
        "imageUrl": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
        "rating": 4.9,
        "review": "1452 Reviews",
        "location": "Jakarta, Indonesia"
      },
      {
        "_id": "3",
        "title": "Berlin Hotel",
        "imageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
        "rating": 4.8,
        "review": "1122 Reviews",
        "location": "Jakarta, Indonesia"
      }
    ]
  };

  return (
   
      <ScrollView>
        <View style={styles.imageContainer}>
          <NetworkImage
            source={recommended.imageUrl}
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

        <View style={styles.content}>
          <View style={styles.descriptionContainer}>
            <ReusableText
              text={recommended.location}
              family={'Medium'}
              size={TEXT.xlarge}
              color={COLORS.black}
            />
            <DescriptionText text={recommended.description} />
          </View>

          <HeightSpacer height={5} />

          <View style={styles.popularContainer}>
            <ReusableText
              text={"Popular Hotels"}
              family={'Bold'}
              size={TEXT.large}
              color={"#00215E"}
            />
            <PopularList data={recommended.popular} />
          </View>
        </View>
      </ScrollView>
   
  )
}

export default Recommended;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  content: {
    paddingHorizontal: 20,
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  popularContainer: {
    marginTop: -10,
  },
});
