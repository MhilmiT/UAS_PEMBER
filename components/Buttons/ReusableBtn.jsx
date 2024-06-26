import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { SIZES } from '../../constants/theme'

const ReusableBtn = ({onPress, btnText, textColor, width, backgorundColor, borderWidth, borderColor}) => {
  return (
   <TouchableOpacity   onPress={onPress} style={styles.btnStyle(width, backgorundColor, borderWidth, borderColor)}>
  <Text style={styles.btnText(textColor)}>{btnText}</Text>
   </TouchableOpacity>
  )
}

export default ReusableBtn

const styles = StyleSheet.create({
    btnText: (textColor) => ({
        fontFamily: "medium",
        fontSize: SIZES.medium,
        color: textColor
    }),
    btnStyle: (width, backgorundColor, borderWidth, borderColor)=>({
        width: width,
        backgroundColor: backgorundColor,
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        borderRadius: SIZES.small,
        borderColor: borderColor,
        borderWidth: borderWidth,
        
    })
})