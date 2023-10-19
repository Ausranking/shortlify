import { configureStore } from "@reduxjs/toolkit";
import focusReducer from './focus'


export default configureStore({
    reducer: {
      focused : focusReducer
  },
});

