import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AppLoading from 'expo-app-loading';
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

export default function App () {
  const [fontsLoaded] = useFonts({
   'InterBold': require('./assets/fonts/Inter-Bold.ttf'),
    'InterSemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'InterMedium': require('./assets/fonts/Inter-Medium.ttf'),
    'InterRegular': require('./assets/fonts/Inter-Regular.ttf'),
    'InterLight': require('./assets/fonts/Inter-Light.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
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
