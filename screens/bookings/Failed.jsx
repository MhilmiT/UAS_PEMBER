import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { HeightSpacer, ReusableBtn, ReusableText, ReusableTile } from '../../components';
import { COLORS, SIZES, TEXT } from '../../constants/theme';
 

const Failed = ({navigation}) => {
 const hotel = {
    "_id": "1",
    "country_id": "1D",
    "title": "Discover Hotel",
    "imageUrl": "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
    "rating": 4.6,
    "review": "1000 Reviews",
    "location": "Jakarta, Indonesia",
  };

  return (
    <View>
      <View style={{ marginTop: 100 }}>
       <Image source={require('../../assets/images/fail.png')}
           style={styles.image}
           />
       <HeightSpacer height={40}/>

    <View style={{alignItems: "center"}}>
        <ReusableText
        text={'Booking Failed'}
        size={TEXT.large}
        color={COLORS.black}
        />
        <HeightSpacer height={20}/>
        <ReusableText
        text={'You can find your booking details below'}
        size={TEXT.medium}
        color={COLORS.gray}
        />

        <HeightSpacer height={20}/>

        </View> 

      <View style={{margin: 20}}>
      <ReusableText
        text={'Room Details'}
        size={TEXT.medium}
        color={COLORS.dark}
        />
       <HeightSpacer height={20}/>

       <ReusableTile item={hotel}/>

       <HeightSpacer height={40}/>

       <ReusableBtn
       onPress={()=> navigation.goBack()}
        btnText={"Try Again"}
        width={(SIZES.width-50)}
        backgorundColor={COLORS.red}
        borderColor={COLORS.red}
        borderWidth={0}
        textColor={COLORS.white}
       />

      </View>

      </View>
    </View>
  );
}

export default Failed

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    resizeMode: "contain"

  },
})