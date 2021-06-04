//NOTE: A list of all orders, those complete at the bottom and those to be responded to above
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

import ListItem from "../components/ListItem";
import colors from "../config/colours";

function CustOrderScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/package1.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Thursday 17th June 16:49</AppText>
        <AppText style={styles.price}>R100</AppText>
        <View style={styles.buttonContainer}>
          <AppButton title="Give feedback"/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default CustOrderScreen;