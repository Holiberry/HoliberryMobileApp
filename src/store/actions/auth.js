export const LOGOUT = "LOGOUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const SET_TRIED_LOGIN = "SET_TRIED_LOGIN";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const SET_API_MODE = "SET_API_MODE";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";

import {AsyncStorage} from "react-native";
import {fetchFromAPI, getAPIAddress} from "../../helpers/networkService";

export const authenticate = (data) => {
    return async (dispatch, getState) => {
        saveLoginDataToStorage(data);
        dispatch({
            type: AUTHENTICATE,
            data: data,
        });
    };
};

export const setTriedLogin = () => {
    return {
        type: SET_TRIED_LOGIN,
    };
};

export const saveLoginDataToStorage = (data) => {
    AsyncStorage.setItem("loginData", JSON.stringify(data));
};

export const logIn = (login, password) => {
    console.log(getAPIAddress("auth/login"));
    return async (dispatch, getState) => {
        dispatch(
            authenticate({
                type: AUTHENTICATE,
                token: "MOCK-TOKEN",
                refreshToken: "mock-refresh-token",
                userId: 0,
            }));
        // const response = await fetchFromAPI({
        //   method: "POST",
        //   url: getAPIAddress("auth/login"),
        //   data: {
        //     email: login,
        //     password: password,
        //   },
        // });
        // if (response && response?.token) {
        //   dispatch(
        //     authenticate({
        //       type: AUTHENTICATE,
        //       token: response?.token,
        //       refreshToken: response?.refreshToken,
        //       userId: response?.id,
        //       // roles: response?.roles,
        //     })
        //   );
        // } else {
        //   if (response && response?.errorMsg) {
        //     throw new Error(JSON.stringify(response));
        //   } else throw new Error("Error");
        // }
    };
};

export const register = (email, login, password) => {
    console.log(getAPIAddress("auth/register"));
    return async (dispatch, getState) => {
        const response = await fetchFromAPI({
            method: "POST",
            url: getAPIAddress("auth/register"),
            data: {
                login: login,
                email: email,
                password: password,
            },
        });
        if (response && response?.token) {
            dispatch(
                authenticate({
                    type: AUTHENTICATE,
                    token: response?.token,
                    refreshToken: response?.refreshToken,
                    userId: response?.id,
                    // roles: response?.roles,
                })
            );
        } else {
            if (response && response?.errorMsg) {
                throw new Error(JSON.stringify(response));
            } else throw new Error("Error");
        }
    };
};

export const logout = () => {
    return async (dispatch, getState) => {
        AsyncStorage.removeItem("loginData");
        // TODO: clear all state
        dispatch({type: LOGOUT});
        dispatch(setAPIMode(0));
    };
};

export const resetPassword = (email) => {
    return async (dispatch) => {
        const response = await fetchFromAPI({
            method: "POST",
            url: getAPIAddress("auth/reset-password"),
            data: {
                email: email,
            },
        });
    };
};

export const setAPIMode = (mode) => {
    return async (dispatch, getState) => {
        await AsyncStorage.setItem("apiMode", JSON.stringify(mode));
        dispatch({
            type: SET_API_MODE,
            apiMode: mode,
        });
    };
};

export const changePassword = (
    currentPassword,
    newPassword,
    confirmPassword
) => {
    return async (dispatch, getState) => {
        const response = await fetchFromAPI({
            method: "POST",
            url: getAPIAddress(`auth/change-password`),
            headers: {Authorization: "Bearer " + getState().auth.token},
            data: {
                currentPassword: currentPassword,
                newPassword: newPassword,
                confirmPassword: confirmPassword,
            },
        });
        if (response) {
            dispatch({
                type: CHANGE_PASSWORD,
            });
        } else {
            if (response) {
                throw new Error(JSON.stringify(response));
            } else throw new Error("Error");
        }
    };
};
