import React, { useMemo } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../../constants/colors';

const ProgressBar = ({color, value, withText, style}) => {
  const percentValue = useMemo(() => {
    if(isNaN(value)) return 0;
    const absVal = Math.abs(value);
    if(absVal < 1) {
      return `${absVal*100}%`;
    } else {
      return absVal < 100 ? `${absVal}%` : '100%';
    }
  }
  , [value])

  return (
    <View style={[styles.row, style]}>
      <View style={styles.bar}>
        <View style={[styles.progress, {width: percentValue, backgroundColor: color || colors.primary}]}></View>
      </View>
      {!!withText && <Text style={styles.value}>{isNaN(value) ? 'NaN' : percentValue}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bar: {
    backgroundColor: colors.lightGray,
    height: 5,
    borderRadius: 2,
    flexGrow: 1,
  },
  progress: {
    height: '100%',
    borderRadius: 2,
  },
  value: {
    paddingLeft: 10,
    color: colors.gray,
  }
});

export default ProgressBar;