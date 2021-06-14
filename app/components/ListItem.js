import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, TouchableHighlight, } from "react-native";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colours";
import colours from "../config/colours";

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions, renderLeftActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions} renderLeftActions={renderLeftActions} friction={2} >
      <TouchableHighlight underlayColor={colors.accent1} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor : colours.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
