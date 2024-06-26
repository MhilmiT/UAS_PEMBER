import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { AppBar, Counter, HeightSpacer, NetworkImage, Rating, ReusableBtn, ReusableText, WidthSpacer } from '../../components';
import { COLORS, SIZES } from '../../constants/theme';
import reusable from '../../components/Reusable/reusable.style';

const SelectedRoom = ({ navigation }) => {
  const router = useRoute();
  const { item } = router.params;
  console.log(item);

  return (
    <View>
      <View style={{ height: 100 }}>
        <AppBar
          top={50}
          left={20}
          right={20}
          color={COLORS.yellow}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <View style={{ backgroundColor: COLORS.lightWhite, borderRadius: 16 }}>
          <NetworkImage
            source={item.imageUrl}
            width={'100%'}
            height={200}
            radius={16}
          />
          <HeightSpacer height={20} />
          <View style={{ marginHorizontal: 10 }}>
            <View style={reusable.rowWithSpace('space-between')}>
              <ReusableText
                text={item.title}
                size={SIZES.medium}
                color={COLORS.black}
              />
              <View style={reusable.rowWithSpace('flex-start')}>
                <Rating rating={item.rating}/>

                <WidthSpacer width={10}/>

                <ReusableText
                text={`(${item.review})`}
                size={SIZES.medium}
                color={COLORS.gray}
              />
              </View>
            </View>

            <HeightSpacer height={10}/>

             <ReusableText
                text={item.location}
                size={SIZES.medium}
                color={COLORS.gray}
              />

              <View style={{borderWidth: 0.5, borderColor: COLORS.lightGrey, marginVertical: 15}}>
              </View>
            
            <ReusableText
                text={'Room Requirements'}
                size={SIZES.medium}
                color={COLORS.black}
              />

             <HeightSpacer height={30}/>

            <View style={reusable.rowWithSpace('space-between')}>
             <ReusableText
                text={'Price per night'}
                size={SIZES.medium}
                color={COLORS.black}
            />

            <ReusableText
                text={'$500/night'}
                size={SIZES.medium}
                color={COLORS.black}
            />
            </View>

            <HeightSpacer height={15}/>

             <View style={reusable.rowWithSpace('space-between')}>
             <ReusableText
                text={'Payment Methode'}
                size={SIZES.medium}
                color={COLORS.black}
                />
            <View style={reusable.rowWithSpace('flex-start')}>
             <Image source={require('../../assets/images/visa.png')}
             style={styles.image}
            />

            </View>
            </View>

              <HeightSpacer height={15}/>

              <View style={reusable.rowWithSpace('space-between')}>
                 <ReusableText
                text={'4 Guest'}
                size={SIZES.medium}
                color={COLORS.black}
              />
              
              <Counter/>
              </View>
              <HeightSpacer height={30}/>

              <ReusableBtn
            onPress={()=> navigation.navigate("Success")}
            btnText={"BOOK NOW"}
           width={SIZES.width-50}
          backgorundColor={COLORS.yellow}
          borderColor={COLORS.yellow}
          borderWidth={0}
          textColor={COLORS.white}/>
        
        <HeightSpacer height={30}/>



          </View>
        </View>
      </View>
    </View>
  );
};

export default SelectedRoom;

const styles = StyleSheet.create({
    image:{
        resizeMode: 'contain',
        width: 50,
        height: 50,
    }
});

