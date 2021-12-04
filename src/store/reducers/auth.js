import {
  AUTHENTICATE,
  LOGOUT,
  SET_TRIED_LOGIN,
  SET_API_MODE,
  CHANGE_PASSWORD,
} from "../actions/auth";

const initialState = () => ({
  token: null,
  triedLogin: false,
  apiMode: 0,
  me: {},
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        token: action.data.token,
        refreshToken: action.data.refreshToken,
        // roles: action.data.roles,
        triedLogin: true,
      };
    case SET_TRIED_LOGIN:
      return { ...state, triedLogin: true };
    case LOGOUT:
      return initialState();
    case SET_API_MODE:
      return { ...state, apiMode: action.apiMode };
    default:
      return state;
  }
};
