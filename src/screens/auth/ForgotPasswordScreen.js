import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

import myStyles from '../../constants/myStyles'
import * as authActions from '../../store/actions/auth'
import ActivityIndicator from '../../components/general/ActivityIndicator'
import Button from '../../components/general/Button'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/general/Header';
import colors from '../../constants/colors';
import { useTranslation } from 'react-i18next';
import { validateEmail } from '../../helpers/validation/validateEmail';
import TextField from '../../components/form/TextField.component';

const ForgotPasswordScreen = props => {
  const [email, setEmail] = useState(props.route?.params?.email)
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const resetPassword = async () => {
    if(!email || !email?.length) {
      return setError(t('auth.enterEmail'))
    }
    if(!validateEmail(email)) {
      return setError(t('generic.invalidEmail'))
    }

    try {
      setIsLoading(true)
      setError(null)
      setMessage(null)
      await dispatch(authActions.resetPassword(email))
      setMessage(t('auth.passwordResetSuccess'))
    } catch (e) {
      setError(e.toString())
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.flex}>
        <KeyboardAvoidingView behavior='height'>
          <ScrollView>
            {Platform.OS === 'ios' && <StatusBar barStyle='dark-content' />}
            <Header back/>
            <View style={styles.content}>
              <View
                style={styles.iconView}>
                  <Image
                    style={styles.logo}
                    source={require('../../../assets/logo.png')}
                  />
              </View>
              <View style={styles.inputsView}>
                <View style={styles.input}>
                  <TextField
                    title={"E-mail"}
                    value={email}
                    setValue={setEmail}
                    inputProps={{
                      placeholder: 'Wprowadź adres e-mail',
                      autoCompleteType: 'off',
                      autoCorrect: false,
                      keyboardType: 'email-address',
                    }}
                    IconFamily={MaterialIcons}
                    icon="mail-outline"
                  />
                </View>
                {!!(error || message) && <Text style={error ? styles.errorText : styles.successMessage}>{error || message}</Text>}
                <View style={styles.buttonView}>
                  <Button
                    text={"Zresetuj hasło"}
                    isLoading={isLoading}
                    onPress={resetPassword}
                    style={styles.submitBtn}
                  />
                </View>
              </View>
            </View>
            {isLoading && <ActivityIndicator />}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  errorText: {
    ...myStyles.errorText,
    marginVertical: 10
  },
  successMessage: {
    color: colors.green,
    marginVertical: 10
  },
  input: {
    marginVertical: 10,
  },
  logo: {
    height: myStyles.screenWidth * 0.4,
    width: myStyles.screenWidth * 0.65,
    resizeMode: 'contain',
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    paddingBottom: 10,
  },
  flex: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginHorizontal: myStyles.marginHorizontal,
  },
  submitBtn: {
    marginTop: 20,
  }
})

export default ForgotPasswordScreen