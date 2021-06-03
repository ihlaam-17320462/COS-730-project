import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colours";


//ALL TO DO IS PASS IN TEXT TO SHOW ON BUTTON AND AND ONPRESS EVENT


function AppButton({ title, onPress, color = "primary", width = "100%"}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, {width} ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    color: colors.secondary,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;