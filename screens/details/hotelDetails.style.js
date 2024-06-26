import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginHorizontal: 20,
  },
  titleContainer: {
    margin: 15,
    backgroundColor: COLORS.lightWhite,
    padding: 5, // Mengurangi padding untuk membuat lebih kecil
    borderRadius: 20,
    marginTop: -30, // Menyesuaikan marginTop sesuai kebutuhan
  },
  titleColumn: {
    padding: 5, // Mengurangi padding untuk membuat lebih kecil
  },
  rowWithSpace: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottom: {
    paddingHorizontal: 30,
    backgroundColor: COLORS.lightWhite,
    height: 90,
    paddingVertical: 20,
    borderRadius: 20,
  },
});

export default styles;
