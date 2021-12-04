import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import NonAuthNavigator from "./NonAuthNavigator";
import MainNavigator from "./MainNavigator";
import StartupScreen from "../screens/general/StartupScreen";

export const AppNavigator = () => {
  const token = useSelector((state) => state.auth.token);
  const triedLogin = useSelector((state) => state.auth.triedLogin);

  return (
    <NavigationContainer>
      {!!token ? (
        <MainNavigator />
      ) : triedLogin ? (
        <NonAuthNavigator />
      ) : (
        <StartupScreen />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
