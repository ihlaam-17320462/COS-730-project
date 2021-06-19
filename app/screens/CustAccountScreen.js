import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparatorComponent from "../components/ListItemSeparatorComponent";
import colors from "../config/colours";
import Icon from "../components/Icon";
import colours from "../config/colours";

const accountItems = [
    {
        title: "Account Details",
        icon: {
          name: "account",
          backgroundColor: colors.primary,
        },
    },
    {
        title: "Payment Information",
        icon: {
        name: "credit-card",
        backgroundColor: colors.primary,
    },
    },
    {
        title: "Notifications",
        icon: {
        name: "message-text",
        backgroundColor: colors.primary,
    },
  },
];

function CustAccountScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Dobby"
          subTitle="dobby123@gmail.com"
          image={require("../assets/dobby.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={accountItems}
          keyExtractor={(accountItem) => accountItem.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        onPress={() => navigation.navigate("Track")}
        IconComponent={<Icon name="logout" backgroundColor = {colours.primary} />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightgrey,
  },
  container: {
    marginVertical: 20,
  },
});

export default CustAccountScreen;