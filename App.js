import React, { useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";
import MealsNavigator from "./navigation/MealsNavigator";

enableScreens();

export default function App() {
  return <MealsNavigator />;
}
