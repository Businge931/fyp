import { configureStore } from "@reduxjs/toolkit";

import prediction from "./prediction-slice";

export const store = configureStore({
  reducer: { predict: prediction },
});
