//NOTE: List of all customers orders
import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import AppCard from "../components/AppCard";
import colours from "../config/colours";
import ordersApi from "../api/request";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useAPI from "../hooks/useAPI";


// const orders = [
//   {
//     id: 1,
//     date: "21 June 2021",
//     pickup: "36 Boundary Road, Houghston Estate, Johannesburg, South Africa",
//     dropoff: "8 Hillside Road, Parktown, Johannesburg, South Africa",
//     image: require("../assets/package1.jpg"),
//   },
//   {
//     id: 2,
//     date: "22 June 2021",
//     pickup: "120 End Street, Doornfontein, Johannesburg, South Africa",
//     dropoff: "129 Rivonia Road, Sandown, Sandton, South Africa",
//     image: require("../assets/package2.jpg"),
//   },
  
// ];

function CustOrderListScreen(navigation) {
  const getOrdersApi = useApi(ordersApi.getOrders);

  useEffect(() => {
    getOrdersApi.request(1, 2, 3);
  }, []);


  return (
    <Screen style={styles.screen}>
      {getOrdersApi.error && (
        <>
          <AppText>Could not retrieve the orders</AppText>  
          <AppButton title="Retry" onPress={getOrdersApi.request} />
        </>
      )}
      <ActivityIndicator visible={getOrdersApi.loading} />
      <FlatList
        data={getOrdersApi.data}
        keyExtractor={order => order.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            subtitle={item.date}
            title1={item.pickup.coordinates[0]} //how to make coordinates back into string location name??
            title2={item.dropoff.coordinates[0]}
            imageUrl={item.image}
            onPress= {navigation.navigate("QuoteList", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colours.lightgrey,
  }
});

export default CustOrderListScreen;