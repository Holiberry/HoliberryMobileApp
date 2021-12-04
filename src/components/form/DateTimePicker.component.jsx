import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import add from 'date-fns/add'

import colors from '../../constants/colors';
import myStyles from '../../constants/myStyles';
import { formatDate } from '../../helpers/format/formatDate';
import Popup from '../popup/Popup.component';

const MyDateTimePicker = ({ value, onChange }) => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);

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
        onPress={() => setIsDatePickerVisible(true)}
        pointerEvents='auto'
        style={styles.input}>
        <Text style={{...styles.text, ...{
          color: value ? colors.textBlack : styles.text.color,
        }}}>
          {value ? formatDate(value?.toString(), 'dd-MM-yyyy HH:mm') : 'Wybierz datę i godzinę'}
        </Text>
        <Popup
          isVisible={isDatePickerVisible}
          setIsVisible={setIsDatePickerVisible}
          buttons={[
            {
              title: 'Wybierz',
              action: () => setIsDatePickerVisible(false)
            }
          ]}
        >
          <DateTimePicker
            display='spinner'
            value={value || new Date()}
            onChange={(eventChange, date) => onChange(getDateString(date))}
            style={styles.picker}
            mode='datetime'
          />
        </Popup>
      </TouchableOpacity>
    )
  } else {
    return (
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => setIsDatePickerVisible(true)}
          style={[styles.inputContainer, {marginRight: 15}]}
        >
          <View style={[styles.input, (isDatePickerVisible || isTimePickerVisible) ? styles.inputFocus : null]}>
            <Text style={styles.text}>{value ? formatDate(value?.toString()) : 'Wybierz datę'}</Text>
            {isDatePickerVisible && <DateTimePicker
              value={value || new Date()}
              onChange={(eventChange, date) => {
                if(date) {
                  date.setHours(12,0,0,0);
                }
                onChange(getDateString(date))
                setIsDatePickerVisible(false);
              }}
              mode='date'
              display="default"
            />}
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsTimePickerVisible(true)} style={styles.inputContainer}>
          <View style={[styles.input, (isDatePickerVisible || isTimePickerVisible) ? styles.inputFocus : null]}>
            <Text style={styles.text}>{value ? formatDate(value?.toString(), 'HH:mm') : 'Wybierz godzinę'}</Text>
            {isTimePickerVisible && <DateTimePicker
              value={value || new Date()}
              onChange={(eventChange, time) => {
                onChange(getDateString(time))
                setIsTimePickerVisible(false);
              }}
              mode='time'
              is24Hour={true}
              display="default"
            />}
            </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 1,
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

export default MyDateTimePicker