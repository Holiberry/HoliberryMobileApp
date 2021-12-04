import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import {Feather, FontAwesome5, MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {useTranslation} from "react-i18next";
import {SafeAreaView} from "react-native-safe-area-context";
import google from "../../../assets/icons/google.png"
import fb from "../../../assets/icons/fb.png"
import myStyles from "../../constants/myStyles";
import * as authActions from "../../store/actions/auth";
import ActivityIndicator from "../../components/general/ActivityIndicator";
import Button from "../../components/general/Button";
import colors from "../../constants/colors";
import TextField from "../../components/form/TextField.component";
import OAuthButton from "../../components/buttons/OAuthButton.component";

const LoginScreen = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const {t} = useTranslation();
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleClickRegister = () => navigation.navigate("Register");

    useEffect(() => {
        setError(null);
    }, [login, password])

    const logIn = async () => {
        try {
            setIsLoading(true);
            setError(null);
            await dispatch(authActions.logIn(login, password));
        } catch (e) {
            setError(e.toString());
        } finally {
            setIsLoading(false);
        }
    };

    const resetPassword = () => {
        if (login) {
            sendResetRequest();
        } else {
            navigation.navigate("ForgotPassword", {login: login});
        }
    };

    const sendResetRequest = async () => {
        try {
            setIsLoading(true);
            setError(null);
            setMessage(null);
            await dispatch(authActions.resetPassword(login));
            setMessage("Hasło zresetowano pomyślnie");
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
                                        title={"Login"}
                                        value={login}
                                        setValue={setLogin}
                                        inputProps={{
                                            placeholder: "Wprowadź login",
                                            autoCompleteType: "off",
                                            autoCorrect: false,
                                            keyboardType: "email-address",
                                        }}
                                        IconFamily={FontAwesome5}
                                        icon="user"
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
                                <TouchableOpacity onPress={resetPassword}>
                                    <Text style={styles.forgotPasswordText}>
                                        {"Zapomniałem hasła"}
                                    </Text>
                                </TouchableOpacity>
                                {!!(error || message) && (
                                    <Text
                                        style={error ? styles.errorText : styles.successMessage}
                                    >
                                        {error || message}
                                    </Text>
                                )}
                                <View style={[styles.buttonView]}>
                                    <Button
                                        text={"ZALOGUJ"}
                                        isLoading={isLoading}
                                        onPress={logIn}
                                        style={styles.submitBtn}
                                    />
                                </View>
                                <View style={[styles.centeredButtonsView]}>
                                    <Text>
                                        Lub zaloguj przez
                                    </Text>
                                </View>
                                <View style={[styles.centeredButtonsView, styles.oauthButtons]}>
                                    <View style={styles.oauthContainer}>
                                        <OAuthButton
                                            onPress={logIn}
                                            site={'fb'}
                                        />
                                    </View>
                                    <View style={styles.oauthContainer}>
                                        <OAuthButton
                                            onPress={logIn}
                                            site={'google'}
                                        />
                                    </View>
                                </View>
                                <View style={[styles.centeredButtonsView]}>
                                    <View style={styles.divider}>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={handleClickRegister}>
                                    <View style={[styles.buttonView, styles.centeredButtonsView]}>
                                        <Text style={[styles.registerText, styles.customText]}>
                                            Zarejestruj się
                                        </Text>
                                    </View>
                                </TouchableOpacity>
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
        height: myStyles.screenHeight * 0.25,
        width: myStyles.screenWidth * 0.7,
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
    }
});

export default LoginScreen;
