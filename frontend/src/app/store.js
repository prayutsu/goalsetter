import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import goalReducer from "../features/goals/goalSlice";
import updateModalReducer from "../features/modal/updateModalSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    modal: updateModalReducer,
  },
});
