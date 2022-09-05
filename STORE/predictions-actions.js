import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading, setPrediction } from "./prediction-slice";

// export const upload = createAsyncThunk(
//   "predict/fetchPrediction",
//   async (imageData) => {
//     const options = {
//       method: "POST",
//       body: JSON.stringify({ image: imageData.base64 }),
//     };
//     try {
//       dispatch(setLoading(true));

//         const url = "http://20.168.85.2/predict";

//         console.log("Before sending");

//       const res = await fetch(url, options);
//       const data = await res.json();
//       console.log("RESPONSE IS :", data);
//       dispatch(setLoading(false));

//       return data;
//     } catch (error) {
//       dispatch(setLoading(false));

//       console.log("An error occured:", error);
//     }
//   }
// );

const url = "http://20.168.85.2";

export const upload = (imageData) => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const options = {
        method: "POST",
        body: JSON.stringify({ image: imageData.base64 }),
      };

      const response = await fetch(`${url}/predict`, options);
      const data = await response.json();
      // console.log("RESPONSE IS :", data);
      dispatch(setPrediction(data.predictions[0]));
      dispatch(setLoading(false));
      return data;
    } catch (error) {
      dispatch(setLoading(false));
      console.log("An error occured:", error);
    }
  };
};
