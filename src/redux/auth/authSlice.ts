import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchUserInfoAction,
  loginUser,
  logoutUser,
} from "./authAction"; // You should import the correct type for UserData

interface AuthData {
  Login: { [key: string]: string };
}

interface InitialStateUserInfoType {
  data: any;
  success: boolean;
  isLoading: boolean;
  message: Array<string>;
}

interface AuthState {
  data: AuthData;
  success: boolean;
  isLoading: boolean;
  message: Array<string>;
  userInfo: InitialStateUserInfoType;
}
const initialState: AuthState = {
  data:
    (JSON.parse(localStorage.getItem("authUser") || "{}") as AuthData) || {},
  isLoading: false,
  success: true,
  message: [],
  userInfo: {
    data: [],
    isLoading: false,
    success: false,
    message: [],
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetUser: (state) => {
      state.data = {} as AuthData;
      localStorage.removeItem("authUser");
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN USER
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.success = true;
        state.message = [];
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<AuthState>) => {
          state.isLoading = false;
          state.success = action.payload?.success;
          state.data = action.payload?.data;
          state.message = action.payload?.message;
        }
      )
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.success = action.payload?.success;
        state.data = action.payload?.data;
        state.message = action.payload?.message;
      })
      // LOGOUT USER
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.message = [];
      })
      .addCase(
        logoutUser.fulfilled,
        (state, action: PayloadAction<AuthState>) => {
          state.isLoading = false;
          state.success = action.payload?.success;
          state.data = action.payload?.data;
          state.message = action.payload?.message;
        }
      )
      .addCase(logoutUser.rejected, (state) => {
        state.isLoading = false;
        state.success = false;
      })
      // GET/USER INFO
      .addCase(fetchUserInfoAction.pending, (state) => {
        state.userInfo.isLoading = true;
      })
      .addCase(
        fetchUserInfoAction.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.userInfo.isLoading = false;
          state.userInfo = action.payload;
        }
      )
      .addCase(
        fetchUserInfoAction.rejected,
        (state, action: PayloadAction<any>) => {
          state.userInfo.isLoading = false;
          state.userInfo = action.payload;
        }
      );
  },
});

export const { resetUser } = authSlice.actions;
export default authSlice.reducer;
