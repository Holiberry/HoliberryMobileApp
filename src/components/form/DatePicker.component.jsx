import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import add from 'date-fns/add'

import colors from '../../constants/colors'
import myStyles from '../../constants/myStyles'
import { formatDate } from '../../helpers/format/formatDate'
import Popup from '../popup/Popup.component';

const DatePicker = ({ value, onChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  const getDateString = date => {
    if (date) {
      if (Platform.OS === 'ios') {
        const myDate = new Date(Date.parse(date))
        const dateWithoutOffset = add(myDate, { minutes: -myDate.getTimezoneOffset() })
        return dateWithoutOffset
      } else {
        return new Date(Date.parse(date))
      }
    } else {
      return value
    }
  }

  if (Platform.OS === 'ios') {
    return (
      <TouchableOpacity
        onPress={() => setIsVisible(true)}
        pointerEvents='auto'
        style={styles.input}>
        <Text style={{...styles.text, ...{
          color: value ? colors.textBlack : styles.text.color,
        }}}>
          {value ? formatDate(value?.toString()) : 'Wybierz datę'}
        </Text>
        <Popup
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          buttons={[
            {
              title: 'Anuluj',
              action: () => setIsVisible(false),
              type: 'text',
            },
            {
              title: 'Wybierz',
              action: () => setIsVisible(false)
            }
          ]}
        >
          <DateTimePicker
            display='spinner'
            value={value || new Date()}
            onChange={(eventChange, date) => onChange(getDateString(date))}
            style={styles.picker}
          />
        </Popup>
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity onPress={() => setIsVisible(true)}>
        <View style={[styles.input, isVisible ? styles.inputFocus : null]}>
          <Text style={styles.text}>{value ? formatDate(value?.toString()) : 'Wybierz datę'}</Text>
          {isVisible && <DateTimePicker
            value={value || new Date()}
            onChange={(eventChange, date) => {
              onChange(getDateString(date))
              setIsVisible(false)
            }}
          />}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 5,
  },
  text: {
    color: colors.gray,
    fontSize: 17,
  },
  input: {
    // height: myStyles.inputHeight,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    justifyContent: 'center',
  },
  inputFocus: {
    borderColor: colors.primary,
    backgroundColor: colors.inputWhite,
  },
  picker: {
    width: '100%',
  }
})

export default DatePicker