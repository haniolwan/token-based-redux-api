import axios from "axios";
import { store } from "../redux/store";
import { resetUser } from "../redux/auth/authSlice";

// const { REACT_APP_URL } = process.env;

const appAxios = axios;

// default
appAxios.defaults.baseURL = 'http://localhost';
// content type
appAxios.defaults.headers.post["Content-Type"] = "application/json";

// content type
const authUser: string = localStorage.getItem("authUser") ?? '{}'
const token = JSON.parse(authUser)
  ? JSON.parse(authUser)?.Login
  : null;
// const { token_type, access_token } = token;
if (token)
  appAxios.defaults.headers.common["Authorization"] =
    token?.token_type + " " + token?.access_token;

// intercepting to capture errors
appAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response;
    if (status === 401) {
      store.dispatch(resetUser());
    }
    // if (status === 401 && error.config.url !== "/auth/logout") {
    //   store.dispatch(logoutUser());
    // } else {
    //   store.dispatch(resetUser());
    // }
    return Promise.reject(error);
  }
);
/**
 * Sets the default authorization
 * @param {*} token
 */
const setAuthorization = (token: any) => {
  appAxios.defaults.headers.common["Authorization"] = "Bearer " + token;
};

const direction = JSON.parse(
  localStorage.getItem("language-direction") ||
  `{"id":1,"name":"English","locale_key":"en","is_rtl":0}`
);
appAxios.defaults.headers.common["X-localization"] = direction?.locale_key;

class APIClient {
  /**
   * Fetches data from given url
   */

  get = (url: string, config = {}) => {
    // get = (url, params) => {
    // let response;

    // let paramKeys = [];

    // if (params) {
    //   Object.keys(params).map((key) => {
    //     paramKeys.push(key + "=" + params[key]);
    //     return paramKeys;
    //   });

    //   const queryString =
    //     paramKeys && paramKeys.length ? paramKeys.join("&") : "";
    //   response = appAxios.get(`${url}?${queryString}`, params);
    // } else {
    //   response = appAxios.get(`${url}`, params);
    // }

    // return response;
    return appAxios.get(url, config);
  };
  /**
   * post given data to url
   */
  create = (url: string, data: any, config = {}) => {
    return appAxios.post(url, data, config);
  };
  /**
   * Updates data
   */
  update = (url: string, data: any) => {
    return appAxios.patch(url, data);
  };

  put = (url: string, data: any) => {
    return appAxios.put(url, data);
  };
  /**
   * Delete
   */
  delete = (url: string, config: any) => {
    return appAxios.delete(url, { ...config });
  };
}
const getLoggedUser = () => {
  const user = localStorage.getItem("authUser");
  if (!user) {
    return null;
  } else {
    return JSON.parse(user);
  }
};

export { APIClient, setAuthorization, getLoggedUser };
