import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ListItem from "../components/ListItem";
import colors from "../config/colours";

function CustOrderDetailsScreen(navigation) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/toyota.jpeg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Monday 21 June 16:49</AppText>
        <AppText style={styles.price}>R100</AppText>
        <View style={styles.driverContainer}>
            <ListItem
            image={require("../assets/driver2.jpg")}
            title="Stacey"
            subTitle="Toyota Avanza"
            />
        </View>
        <AppButton title = "Accept" width = "100%"/>    
        <AppButton title = "Reject" width = "100%"/>    
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
    color: colors.accent3,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  driverContainer: {
    marginVertical: 40,
  },
});

export default CustOrderDetailsScreen;