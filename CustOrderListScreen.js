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
import 'datejs';

function CustOrderListScreen({navigation}) {
  const getOrdersApi = useAPI(ordersApi.getOrders);

  useEffect(() => {
    getOrdersApi.request();
  }, []);


  return (
    <Screen style={styles.screen}>
      {getOrdersApi.error && (
        <>
          <Image>
                 resizeMode = "center"
                 source = {require('../assets/fixing_pana.png')}</Image>  
          <AppText>Could not retrieve orders. Please retry.</AppText>
          <AppButton styles title="Retry" onPress={getOrdersApi.request} />
        </>
      )}
      {getOrdersApi.data && (
        <FlatList
          onRefresh={() => getOrdersApi.request()}
          refreshing={getOrdersApi.loading}
          data={getOrdersApi.data}
          keyExtractor={order => order._id}
          renderItem={({ item }) => (
            <AppCard
              subtitle={new Date(item.date).toString("HH:mm dd MMM yyyy")}
              title1={`Pickup: ${item.pickup_address}`}
              title2={`Dropoff: ${item.dropoff_address}`}
              imageUrl={item.image}
              onPress= {() => navigation.navigate("QuoteList", item)}
            />
          )}
        />
      )}
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