import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from 'react-native-vector-icons'

import myStyles from '../../constants/myStyles'
import colors from '../../constants/colors'

const Header = ({ title, isLoading, back, light, style, noMargin, buttonLeft }) => {
  const navigation = useNavigation()
  console.log(navigation)
  return (
    <View style={[styles.container, noMargin ? null : styles.containerMargin, style]}>
      <View style={styles.menu}>
        <TouchableOpacity
          style={[noMargin ? styles.touchableWithoutMargin : styles.touchableMenu]}
          onPress={() => {
            back ? navigation.goBack() : navigation.toggleDrawer()
          }}
        >
          <Entypo name={back ? 'chevron-left' : 'menu'} size={26} color={light ? colors.white : colors.textBlack} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.center}>
          <Text style={[styles.title, light ? styles.titleLight : null]}>{isLoading ? 'Loading...' : title}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    ...myStyles.title,
    fontWeight: 'bold'
  },
  titleLight: {
    color: colors.white,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: myStyles.screenWidth * 0.12,
    flex: 1,
  },
  menu: {
    width: myStyles.screenWidth * 0.12,
    marginRight: 5,
  },
  touchableMenu: {
    padding: 5,
  },
  touchableWithoutMargin: {
    paddingVertical: 5,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
  },
  containerMargin: {
    paddingHorizontal: myStyles.marginHorizontal,
  }
})

export default Header