//NOTE: List of all quotes for an order
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemRejectAction from "../components/ListItemRejectAction";
import ListItemSeparatorComponent from "../components/ListItemSeparatorComponent";

const initialQuotes = [
  {
    id: 1,
    name: "Keenan",
    price: "100",
    image: require("../assets/driver1.jpg"),
  },
  {
    id: 2,
    name: "Stacey",
    price: "200",
    image: require("../assets/driver2.jpg"),
  },
  
];

function CustQuoteListScreen({navigation}) {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [refreshing, setRefreshing] = useState(false);

  const handleReject= (quote) => {
    setQuotes(quotes.filter((r) => r.id !== quote.id));
  };

  return (
    <Screen>
      <FlatList
        data={quotes}
        keyExtractor={(quote) => quote.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            subTitle={"R" + item.price}
            image={item.image}
            onPress={() => navigation.navigate("OrderDetails", item)}
            renderRightActions={() => (
                <ListItemRejectAction onPress={() => handleReject(item)} /> )} /* if swiped should delete from list*/
          />
        )}
        ItemSeparatorComponent={ListItemSeparatorComponent}
        refreshing={refreshing}
        onRefresh={() => {
          setQuotes([
            {
                id: 2,
                name: "Bob",
                price: "200",
                image: require("../assets/driver1.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default CustQuoteListScreen;