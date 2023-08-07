import { createSlice } from "@reduxjs/toolkit";

const cfiSlice=createSlice({
    name :"cfiSlice",
    initialState:{
        formname:"",
        formDescription:"",
    },
    reducers:{
        setformdata:(state,action)=>{
            state.formname=action.payload.fname;
            state.formDescription=action.payload.desc;

        }
        
    }


});

export default cfiSlice.reducer;
export const {setformdata}=cfiSlice.actions;