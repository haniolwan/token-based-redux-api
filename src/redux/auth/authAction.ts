import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIClient } from "./../../helpers/api_helper";
import { AxiosError, isAxiosError } from "axios";
import * as url from "../../helpers/url_helper";
// import { result } from "./domeData";

const api = new APIClient();

interface LoginArgument {
  loginData: {};
  cb: () => void;
}
// POST/LOGIN USER ACTION
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData: LoginArgument, { rejectWithValue }) => {
    try {
      const { data } = await api.create(url.POST_LOGIN, loginData.loginData);
      if (data?.data?.length === 0) {
        loginData.cb();
      }
      localStorage.setItem("authUser", JSON.stringify(data?.data));
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error?.response?.data);
      }
    }
  }
);


interface forgetPassArgument {
  email: {};
  cb: () => void;
}

// POST/GORGET PASSWORD ACTION
export const forgetPassAction = async (forgetPass: forgetPassArgument) => {
  try {
    const { data } = await api.create(
      url.POST_FORGET_PASSWORD,
      forgetPass?.email
    );
    forgetPass?.cb();
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError?.response) {
      return axiosError?.response?.data;
    }
    throw error;
  }
};

// GET/RESET LOGOUT TOKEN ACTION
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const authUser = localStorage.getItem("authUser");
      if (authUser) {
        const { data } = await api.create(url.POST_LOGOUT, '');
        localStorage.removeItem("authUser");
        return data;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// GET/USER INFO ACTION
export const fetchUserInfoAction = createAsyncThunk(
  "user/getUserInfo",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get(url.GET_USER_INFO);
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error?.response?.data);
      }
    }
  }
);

interface userInfoDataType {
  [key: string]: any;
}
