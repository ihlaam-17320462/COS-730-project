import { Platform } from "react-native";

import colors from "./colours";

export default {
  colors,
  text: {
    color: colors.secondary,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
