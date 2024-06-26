import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../../constants/theme';
import HeightSpacer from '../../Reusable/HeightSpacer';
import ReusableText from '../../Reusable/ReusableText';
import Rating from '../../Reusable/Rating';

const HotelCard = ({ item, margin, onPress }) => {
  return (
    <TouchableOpacity style={styles.card(margin)} onPress={onPress}>
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <HeightSpacer height={5} />

        <View style={{ padding: 10 }}>
          <ReusableText
            text={item.title}
            family={'medium'}
            size={SIZES.small}
            color={COLORS.black}
          />

          <HeightSpacer height={5} />

          <ReusableText
            text={item.location}
            family={'medium'}
            size={SIZES.small}
            color={COLORS.gray}
          />

          <HeightSpacer height={5} />

          <Rating rating={item.rating} />
          <HeightSpacer height={5} />
          
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HotelCard;

const styles = StyleSheet.create({
  card: (margin) => ({
    width: SIZES.width / 2.8, // Menambah lebar kotak
    height: 220, // Menambah tinggi kotak
    borderRadius: 16,
    backgroundColor: COLORS.white,
    margin: margin / 4, // Mengurangi margin lebih jauh untuk membuat kotak lebih berdekatan
  }),
  imageContainer: {
    alignItems: 'center',
    marginTop: 10,
    height: 120, // Menambah tinggi container gambar
  },
  image: {
    width: '90%',
    height: '100%',
    borderRadius: 16,
  },
  review: {
    marginTop: 5,
  },
});
