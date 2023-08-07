import { configureStore } from "@reduxjs/toolkit";
import cfiReducer from "./slices/cfiSlice";


export default configureStore({
    reducer:{
cfiReducer  
    }
});