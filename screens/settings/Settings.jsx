import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import { AppBar, Country, HeightSpacer, ReusableText, SettingsTile } from '../../components'

const Settings = ({navigation}) => {
  return (
    <View style={{backgroundColor: COLORS.lightWhite, flex:1}}>
    <View style={{height:150}}>
        <AppBar
        top={10}
        left={0}
        right={0}
        color={COLORS.yellow}
        onPress={()=> navigation.goBack()}
        />
    </View>

    <View style={{marginHorizontal:20}}>
    <ReusableText
    text={"Account Setting"}
    size={SIZES.xLarge}
    color={COLORS.black}
    /> 
    <HeightSpacer height={10}/>

    <SettingsTile title={'Language'}/>

    <HeightSpacer height={3}/>

    <SettingsTile title={'Country'} title1={"USA"}/>

    <HeightSpacer height={3}/>

    <SettingsTile title={'Currency'} title1={"USD"}/>

     <HeightSpacer height={40}/>

    <ReusableText
    text={"Support"}
    size={SIZES.xLarge}
    color={COLORS.black}
    />

      <HeightSpacer height={10}/>

     <SettingsTile title={'Get Help'} title1={""}/>

    <HeightSpacer height={3}/>

     <SettingsTile title={'Give FeedBack'} title1={""}/>

    <HeightSpacer height={40}/>

    <ReusableText
    text={"Legal"}
    size={SIZES.xLarge}
    color={COLORS.black}
    />
    <HeightSpacer height={10}/>
     <SettingsTile title={'Term of Service'} title1={""}/>

    <HeightSpacer height={3}/>

     <SettingsTile title={'Privacy Policy'} title1={""}/>

    </View>
    
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})