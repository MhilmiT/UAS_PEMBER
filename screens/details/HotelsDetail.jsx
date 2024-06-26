import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { AppBar, DescriptionText, HeightSpacer, HotelMaps, NetworkImage, ReusableBtn, ReusableText, ReviewList } from '../../components';
import { COLORS, SIZES } from '../../constants/theme';
import styles from './hotelDetails.style';
import reusable from '../../components/Reusable/reusable.style';
import { Rating } from 'react-native-stock-star-rating';
import { Feather } from '@expo/vector-icons';

const HotelsDetail = ({ navigation }) => {
  const hotel = {
    "availability": {
      "start": "2024-08-20T00:00:00",
      "end": "2024-08-25T00:00:00",
    },
    "_id": "1",
    "country_id": "1D",
    "title": "Discover Hotel",
    "description": "Discover Hotel, situated in the heart of Jakarta, offers an unparalleled lodging experience that combines modern luxury with warm hospitality. Elegantly designed, the hotel provides easy access to the city's main attractions, including the National Monument (Monas) and Taman Mini Indonesia Indah. With top-notch amenities such as gourmet dining and a fully equipped fitness center, Discover Hotel is the perfect choice for business travelers and tourists seeking a remarkable stay in Indonesia's bustling capital.",
    "contact": "08193849249",
    "imageUrl": "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
    "rating": 4.6,
    "review": "1000 Reviews",
    "location": "Jakarta, Indonesia",
    "latitude": -6.1235,
    "longitude": 106.8306,
    "price": "Rp500.000/night",
    "facilities": [
      {
        "wifi": true,
        "_id": "1E"
      }
    ],
    "__v": 1,
    "reviews":[
      {
        "_id": "1",
        "review": "Stayed at Discover Hotel during my business trip to Jakarta and I must say it exceeded my expectations. The hotel's location was perfect, allowing easy access to key landmarks and business districts.",
        "rating": "4.6",
        "user": {
          "_id": "1AA",
          "username": "Ciahi",
          "profile": "https://images.unsplash.com/photo-1582439170934-d089aa10abda?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwYm9keXxlbnwwfHwwfHx8MA%3D%3D"
        },
        "updatedAt": "2024-08-09"
      },
        {
          "_id": "2",
        "review": "My recent stay at Discover Hotel was nothing short of fantastic. The hotel's central location in Jakarta made it incredibly convenient for exploring the city's attractions. The room was not only comfortable but also stylishly decorated.",
        "rating": "4.7",
        "user": {
          "_id": "2AA",
          "username": "Hilmi",
          "profile": "https://images.unsplash.com/photo-1580491934424-f4d543ccbf05?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuJTIwYm9keXxlbnwwfHwwfHx8MA%3D%3D"
        },
        "updatedAt": "2024-08-09"
      }
    ]
  };

  let coordinates={
    id: hotel._id,
    title: hotel.title,
    latitude: hotel.latitude,
    longitude: hotel.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  }

  return (
    <ScrollView>
      <View style={{ height: 100 }}>
        <AppBar
          color={COLORS.yellow}
          icon={"search1"}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => { }}
        />
      </View>
      <View style={styles.container}>
        <NetworkImage
          source={hotel.imageUrl}
          width={"100%"}
          height={250}
          radius={25}
        />
        <View style={styles.titleContainer}>
          <View style={styles.titleColumn}>
            <ReusableText
              text={hotel.title}
              size={SIZES.xLarge}
              color={COLORS.black}
            />
            <HeightSpacer height={10} />
            <ReusableText
              text={hotel.location}
              size={SIZES.medium}
              color={COLORS.black}
            />
            <HeightSpacer height={15} />
            <View style={styles.rowWithSpace}>
              <Rating
                maxStars={5}
                stars={hotel.rating}
                bordered={false}
                color={"#FD9942"}
              />
              <ReusableText
                text={`(${hotel.review})`}
                size={SIZES.medium}
                color={COLORS.gray}
              />
            </View>
          </View>
        </View>

        <View style={[styles.container, {paddingTop: 5}]}>
        <ReusableText
                text={"Description"}
                size={SIZES.large}
                color={COLORS.black}
              />
      
   

        <DescriptionText text={hotel.description}/>

        <HeightSpacer height={15}/>

        <ReusableText
                text={"Location"}
                size={SIZES.large}
                color={COLORS.black}
              />
         <HeightSpacer height={5}/>

        <ReusableText
                text={hotel.location}
                size={SIZES.small+2}
                color={COLORS.black}
              />
        
        <HotelMaps coordinates={coordinates} />

        <HeightSpacer height={20}/>

        <View style={reusable.rowWithSpace("space-between")}>

          <ReusableText
                text={'Reviews'}
                size={SIZES.large}
                color={COLORS.black}
              />

        <TouchableOpacity>
          <Feather name='list' size={20}/>
        </TouchableOpacity>
        </View>

        <HeightSpacer height={30}/>
        <ReviewList reviews={hotel.reviews}/>

        </View>
        <View style={[reusable.rowWithSpace('space-between'), styles.bottom]}>
        <View>
           <ReusableText
                text={hotel.price}
                size={SIZES.medium}
                color={COLORS.black}
              />
              <HeightSpacer height={5}/>

            <ReusableText
                text={"Jan 01 - Dec 25"}
                size={SIZES.medium}
                color={COLORS.black}
              />
        </View>
        <ReusableBtn 
        onPress={()=> navigation.navigate('SelectRoom')}
        btnText={"Select Room"}
        width={(SIZES.width-150)/2}
        backgorundColor={COLORS.yellow}
        borderColor={COLORS.yellow}
        borderWidth={0}
        textColor={COLORS.white}
        />
        </View>
      </View>
    </ScrollView>
  );
};

export default HotelsDetail;
