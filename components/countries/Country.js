import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";

export default function Country({ country }) {
  return (
    <View style={[styles.card, styles.shadowProp]}>
      <Image
        style={{ width: "200px", height: "200px" }}
        source={{
          uri: country.flags.png,
        }}
      />
      <Text style={{ fontSize: "2rem" }}>{country.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
