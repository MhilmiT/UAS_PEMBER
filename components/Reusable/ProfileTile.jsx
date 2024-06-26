import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import WidthSpacer from "./WidthSpacer";
import ReusableText from "./ReusableText";
import reusable from "./reusable.style";

const ProfileTile = ({ onPress, title, icon }) => {
  return (
    <TouchableOpacity style={styles.tile} onPress={onPress}>
      <View style={reusable.rowWithSpace("space-between")}>
        <View style={reusable.rowWithSpace("flex-start")}>
          <AntDesign name={icon} size={20} />
          <WidthSpacer width={20} />
          <ReusableText
            text={title}
            family={"regular"}
            size={SIZES.medium}
            color={COLORS.black}
            style={{
              backgroundColor: COLORS.white,
              padding: 5,
              borderRadius: 10,
              shadowColor: COLORS.black,
              
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tile: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 15,
    shadowColor: COLORS.black,
    marginTop: 15
   
   
  },
});

export default ProfileTile;