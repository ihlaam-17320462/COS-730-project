import * as React from 'react';
import AppButton from "./AppButton";
import { useNavigation } from '@react-navigation/native';


function GoToButton({screenName, title, width  }) {
    const navigation = useNavigation();

  return (
    <AppButton
      title={title}
      width={width}
      onPress={() => navigation.navigate(screenName)}
    />
  );
}

export default GoToButton;
