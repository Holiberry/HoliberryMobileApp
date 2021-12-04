import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../../constants/colors';

// Fix for IOS, backgroundColor in expo-status-bar is Android-only
const StatusBarBackground = ({backgroundColor}) => {
  const insets = useSafeAreaInsets();

  return Platform.OS === 'ios' ? <View style={[
    styles.statusBarBackground,
    {
      height: insets.top,
      backgroundColor: backgroundColor || colors.secondary,
    }
  ]} /> : null;
}

const styles = StyleSheet.create({
  statusBarBackground: {
    width: '100%',
    position: 'absolute',
  }
});

export default StatusBarBackground;