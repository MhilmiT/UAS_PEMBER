import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme';
import { AppBar, HeightSpacer, ReusableBtn, ReusableTile } from '../../components';

const SelectRoom = ({navigation}) => {
   const rooms = [
    
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
    ];

  return (
    <View>
      <View style={{height: 100}}>
        <AppBar
            top={10}
            left={0}
            right={20}
            color={COLORS.yellow}
            icon={"search1"}
            color1={COLORS.white}
            onPress={() => navigation.goBack()}
            onPress1={() => {}}
          />
      </View>

      <FlatList
      style={{marginTop:20}}
      data={rooms}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item)=> item._id}
      renderItem={({item})=>(

        <View style={{marginBottom:10,marginHorizontal:20 }}>
          <View style={{backgroundColor: COLORS.lightWhite, borderRadius: 12}}>
            <ReusableTile item={item}/>
            <HeightSpacer height={10}/> 

          <View style={{margin:10, alignItems: "center"}}>

            <ReusableBtn
            onPress={()=> navigation.navigate('SelectedRoom', {item})}
            btnText={"Select Room"}
           width={SIZES.width-50}
          backgorundColor={COLORS.yellow}
          borderColor={COLORS.yellow}
          borderWidth={0}
          textColor={COLORS.white}/>

          </View>
            
      
          
           </View>

        </View>
      )}
      />

    </View>
  );
};


export default SelectRoom

const styles = StyleSheet.create({

})