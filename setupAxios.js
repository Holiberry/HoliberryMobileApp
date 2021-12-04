import axios from "axios";
import { getAPIAddress } from "./src/helpers/networkService";
import * as authActions from './src/store/actions/auth';

const setupAxios = (store) => {
  // add user token to axios if provided
  axios.interceptors.request.use(
    config => {
      const { auth: { token: authToken } } = store.getState();
      if(!config.url) console.error('request.url is undefined');
      // if ( authToken && isValidUrl4Token(config.url)) {
      if ( authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    },
    err => Promise.reject(err)
  );

  axios.interceptors.response.use(response => response, error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && originalRequest.url.includes('refresh-token')) {
      return Promise.reject(error);
    }

    if(error.response.status !== 401) {
      return Promise.reject(error);
    }
    
    const { auth: { refreshToken } } = store.getState();

    if(refreshToken) {
      axios.post(getAPIAddress(`auth/refresh-token`), {
        token: refreshToken
      }).then(async response => {
        await store.dispatch(authActions.authenticate({
          token: response?.data?.token,
          refreshToken: response?.data?.refreshToken,
          userId: response?.data?.id
        }));
        console.log('Refreshed token');

        originalRequest.headers['Authorization'] = `Bearer ${response.data.token}`;
        return axios(originalRequest);
      }).catch(err => {
        console.log('Cannot get new access token!');
        console.log(err?.response?.data?.Message || error?.message);
      });
    } else {
      console.log('Refresh token not found!');
    }
    return Promise.reject(error);
  });
}

export default setupAxios;