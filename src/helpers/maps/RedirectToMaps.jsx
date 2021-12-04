import React from "react";
import { Platform, Linking } from "react-native";

export const RedirectToNativeMaps = ({ address }) => {
  const url =
    Platform.OS === "ios"
      ? `http://maps.apple.com/?address=${address}`
      : `https://maps.google.com?q=${address}`;
  return <View>Linking.openRUL(url)</View>;
};
