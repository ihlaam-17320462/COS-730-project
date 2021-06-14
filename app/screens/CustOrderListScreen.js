//NOTE: List of all requests from drivers, you can swipe right or left, after you create an order you will
//be redirected to this list
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparatorComponent from "../components/ListItemSeparatorComponent";
import ListItemMoreAction from "../components/ListItemMoreAction";

const initialRequests = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/driver1.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/driver1.png"),
  },
  
];

function CustOrdersScreen(props) {
  const [requests, setRequests] = useState(initialRequests);
  const [refreshing, setRefreshing] = useState(false);

  // const handleDelete = (request) => {
  //   setRequests(requests.filter((r) => r.id !== request.id));
  // };

  return (
    <Screen>
      <FlatList
        data={requests}
        keyExtractor={(request) => request.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
                <ListItemMoreAction onPress={() => ListItemMoreAction(item)} /> )} /* if swiped should show more details*/
          />
        )}
        ItemSeparatorComponent={ListItemSeparatorComponent}
        refreshing={refreshing}
        onRefresh={() => {
          setRequests([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/driver1.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default CustOrdersScreen;