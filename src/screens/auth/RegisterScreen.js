import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Image, KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet, Text, View,} from "react-native";
import {Feather, FontAwesome5, MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {useTranslation} from "react-i18next";
import {SafeAreaView} from "react-native-safe-area-context";
import myStyles from "../../constants/myStyles";
import * as authActions from "../../store/actions/auth";
import ActivityIndicator from "../../components/general/ActivityIndicator";
import Button from "../../components/general/Button";
import colors from "../../constants/colors";
import TextField from "../../components/form/TextField.component";
import Checkbox from "react-native-bouncy-checkbox";
import Header from "../../components/general/Header";

const RegisterScreen = (props) => {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [acceptTerms, setAcceptTerms] = useState("");
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const {t} = useTranslation();
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const toggleCheckbox = () => setAcceptTerms(prevState => !prevState)

    useEffect(() => {
        setError(null);
    }, [login, password, email, confirmPassword])

    const register = async () => {
        try {
            setIsLoading(true);
            setError(null);
            await dispatch(authActions.register(email, login, password));
        } catch (e) {
            setError(e.toString());
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.background}>
            <SafeAreaView style={styles.flex}>
                <KeyboardAvoidingView behavior="height">
                    <Header back/>
                    <ScrollView>
                        {Platform.OS === "ios" && <StatusBar barStyle="dark-content"/>}
                        <View style={styles.content}>
                            <View style={styles.iconView}>
                                <Image
                                    style={styles.logo}
                                    source={require("../../../assets/logo.png")}
                                />
                            </View>
                            <View style={styles.inputsView}>
                                <View style={styles.input}>
                                    <TextField
                                        title={"Nick"}
                                        value={login}
                                        setValue={setLogin}
                                        inputProps={{
                                            placeholder: "Wprowadź nick",
                                            autoCompleteType: "off",
                                            autoCorrect: false,
                                        }}
                                        IconFamily={FontAwesome5}
                                        icon="user"
                                    />
                                </View>
                                <View style={styles.input}>
                                    <TextField
                                        title={"E-mail"}
                                        value={email}
                                        setValue={setEmail}
                                        inputProps={{
                                            placeholder: "Wprowadź e-mail",
                                            autoCompleteType: "off",
                                            autoCorrect: false,
                                            keyboardType: "email-address",
                                        }}
                                        IconFamily={FontAwesome5}
                                        icon="at"
                                    />
                                </View>
                                <View style={styles.input}>
                                    <TextField
                                        title={"Hasło"}
                                        value={password}
                                        setValue={setPassword}
                                        inputProps={{
                                            placeholder: "Wprowadź hasło",
                                            secureTextEntry: true,
                                            autoCompleteType: "off",
                                            autoCorrect: false,
                                        }}
                                        IconFamily={FontAwesome5}
                                        icon="lock"
                                    />
                                </View>
                                <View style={styles.input}>
                                    <TextField
                                        title={"Potwierdź hasło"}
                                        value={confirmPassword}
                                        setValue={setConfirmPassword}
                                        inputProps={{
                                            placeholder: "Wprowadź hasło ponownie",
                                            secureTextEntry: true,
                                            autoCompleteType: "off",
                                            autoCorrect: false,
                                        }}
                                        IconFamily={FontAwesome5}
                                        icon="lock"
                                    />
                                </View>
                                <Checkbox
                                    style={styles.checkbox}
                                    isChecked={acceptTerms}
                                    onChange={toggleCheckbox}
                                    text={"Akceptuję regulamin"}
                                    textStyle={{
                                        textDecorationLine: "none",
                                    }}
                                    fillColor={colors.primary}
                                />
                                {!!(error || message) && (
                                    <Text
                                        style={error ? styles.errorText : styles.successMessage}
                                    >
                                        {error || message}
                                    </Text>
                                )}
                                <View style={[styles.buttonView]}>
                                    <Button
                                        text={"STWÓRZ KONTO"}
                                        isLoading={isLoading}
                                        onPress={register}
                                        style={styles.submitBtn}
                                    />
                                </View>
                            </View>
                        </View>
                        {isLoading && <ActivityIndicator/>}
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.background,
    },
    errorText: {
        ...myStyles.errorText,
        marginVertical: 10,
    },
    successMessage: {
        color: colors.green,
        marginVertical: 10,
    },
    input: {
        marginBottom: 5,
    },
    logo: {
        height: myStyles.screenHeight * 0.2,
        width: myStyles.screenWidth * 0.4,
        resizeMode: "contain",
    },
    iconView: {
        justifyContent: "center",
        alignItems: "center",
    },
    buttonView: {
        paddingVertical: 15
    },
    centeredButtonsView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    flex: {
        flex: 1,
    },
    content: {
        flex: 1,
        marginHorizontal: myStyles.marginHorizontal,
    },
    submitBtn: {
        marginTop: 15,
        marginHorizontal: 5
    },
    forgotPasswordText: {
        color: colors.darkGray,
        fontWeight: "bold",
        textDecorationLine: "underline"
    },
    customText: {
        color: colors.primary,
        fontWeight: "bold",
    },
    registerText: {
        textDecorationLine: "underline"
    },
    oauthContainer: {
        flex: 1,
        marginHorizontal: 5,
        paddingTop: 10,
    },
    divider: {
        height: 20,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        width: '80%'
    },
    checkbox: {
        marginTop: 8
    }
});

export default RegisterScreen;
