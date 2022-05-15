import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Home from "./screens/Home"
import Details from "./screens/Details"

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    InterBold : require('./assets/fonts/Inter-Bold.ttf'),
    InterSemiBold : require('./assets/fonts/Inter-SemiBold.ttf'),
    InterMediumBold : require('./assets/fonts/Inter-Medium.ttf'),
    InterRegularBold : require('./assets/fonts/Inter-Regular.ttf'),
    InetrLighter : require('./assets/fonts/InetrLight.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
