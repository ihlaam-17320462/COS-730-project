import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparatorComponent from "../components/ListItemSeparatorComponent";
import ListItemRejectAction from "../components/ListItemRejectAction";
import ListItemAcceptAction from "../components/ListItemAcceptAction";

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

  const handleDelete = (request) => {
    // Delete the message from messages
    setRequests(requests.filter((r) => r.id !== request.id));
  };

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
            renderLeftActions={() => (
                <ListItemRejectAction onPress={() => handleDelete(item)} /> )}
            renderRightActions={() => (
                <ListItemAcceptAction onPress={() => ListItemAcceptAction(item)} /> )}
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