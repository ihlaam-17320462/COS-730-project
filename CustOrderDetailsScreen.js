import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ListItem from "../components/ListItem";
import colors from "../config/colours";
import 'datejs';

function CustOrderDetailsScreen({navigation,route}) {

  const handleReject = () => {
    route.params.rejectCallback(route.params.quote);
    navigation.pop();
  }

  const handleAccept = () => {
    navigation.navigate("Track",route.params);
  }

  return (
    <View>
      <Image style={styles.image} source={{uri:route.params.quote.driver.vehicleImage}} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{new Date(route.params.order.deliveryDateTime).toString("HH:mm dd MMM yyyy")}</AppText>
        <AppText style={styles.price}>{`R ${route.params.quote.price}`}</AppText>
        <View style={styles.driverContainer}>
            <ListItem
              image={route.params.quote.driver.image}
              title={route.params.quote.driver.name}
              subTitle={`${route.params.quote.driver.vehicleType} ${route.params.quote.driver.vehicleRegistration}`}
            />
        </View>
        <AppButton title = "Accept" width = "100%" onPress={handleAccept}/>    
        <AppButton title = "Reject" width = "100%" onPress={handleReject}/>    
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
    height: 150,
  },
  price: {
    color: colors.accent3,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
  },
  driverContainer: {
    marginVertical: 10,
  },
});

export default CustOrderDetailsScreen;