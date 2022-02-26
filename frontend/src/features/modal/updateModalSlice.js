import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  text: "",
  _id: "",
};

export const updateModalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    showModal: (state, action) => {
      state.visible = true;
      state.text = action.payload.text;
      state._id = action.payload._id;
    },
    hideModal: (state) => {
      state.visible = false;
      state.text = "";
      state._id = "";
    },
    reset: (state) => initialState,
  },
});

export const { showModal, hideModal, reset } = updateModalSlice.actions;
export default updateModalSlice.reducer;
