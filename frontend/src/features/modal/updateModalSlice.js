import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  text: "",
};

export const updateModalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    showModal: (state, action) => {
      state.visible = true;
      state.text = action.payload;
    },
    hideModal: (state) => {
      state.visible = false;
      state.text = "";
    },
    reset: (state) => initialState,
  },
});

export const { showModal, hideModal, reset } = updateModalSlice.actions;
export default updateModalSlice.reducer;
