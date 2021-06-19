import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";

import AppText from "./AppText";
import colors from "../config/colours";

function AppCard({ title1, title2, subtitle, imageUrl, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.lightgrey} onPress={onPress}>
      <View style={styles.card}>  
        <Image style={styles.image} source={{uri: imageUrl}} />
          <View style={styles.detailsContainer}>
              <AppText style={styles.subtitle} numberOfLines={1}>
                {subtitle}
              </AppText>
              <AppText style={styles.title} numberOfLines={1}>
                {title1}
              </AppText>
              <AppText style={styles.title} numberOfLines={1}>
                {title2}
              </AppText>
          </View>
      </View>
    </TouchableHighlight>

  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 160,
  },
  subtitle: {
    color: colors.accent1,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
    fontSize: 14,
  },
});

export default AppCard;