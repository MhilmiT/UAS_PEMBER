import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import reusable from './reusable.style'
import { AntDesign } from '@expo/vector-icons'
import ReusableText from './ReusableText'
import { COLORS, SIZES, TEXT } from '../../constants/theme'

const AppBar = ({color, title, color1, onPress, onPress1}) => {
  return (
    <View style={styles.overlay}>
      <View style={reusable.rowWithSpace('space-between')}>
        <TouchableOpacity style={styles.box(color)} onPress={onPress}>

        <AntDesign 
        name='left'
        size={26}
        />
        </TouchableOpacity>

        <ReusableText
            text={title}
            family={'medium'}
            size={TEXT.large}
            color={COLORS.black}
          />

       

      </View>
    </View>
  )
}

export default AppBar

const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        top:60,
        left:15,
        right:0,
        justifyContent: "center"
    },
    box: (color)=> ({
        backgroundColor: color,
        width: 30,
        height: 30,
        borderRadius: 9,
        alignItems: "center",
        justifyContent: "center"
    }),
    box1: (color1)=> ({
        backgroundColor: color1,
        width: 30,
        height: 30,
        borderRadius: 9,
        alignItems: "center",
        justifyContent: "center"
    }),
    
})