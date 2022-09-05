import { createSlice } from "@reduxjs/toolkit";

const prediction = createSlice({
  name: "prediction",
  initialState: { prediction: {}, isShowAlert: false, isLoading: false },
  reducers: {
    setPrediction(state, action) {
      state.prediction = {
        confidence: action.payload.confidence,
        label: action.payload.label,
      };
      state.isShowAlert = true;
    },
    setClearImages(state, action) {
      state.prediction = {};
      state.isShowAlert = false;
    },
    setLoading(state, { payload }) {
      state.isLoading = payload;
    },
    // showAlert(state, action) {
    //   state.prediction = action.payload;
    // },
  },
  // extraReducers: {
  //   [upload.fulfilled]: (state, action) => {
  //     state.prediction = action.payload;
  //     state.isShowAlert = true;
  //   },
  // },
});

export const { setLoading, setClearImages, setPrediction, showAlert } =
  prediction.actions;

export default prediction.reducer;
