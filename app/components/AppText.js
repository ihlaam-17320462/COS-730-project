import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";

//ALL TO DO IS PASS IN TEXT TO BE DISPLAYED

function AppText({ children, style }) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

export default AppText;
