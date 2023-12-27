import { createSlice } from "@reduxjs/toolkit";

const themeSlice=createSlice({
    name:"themeToggler",
    initialState:{
        isLightTheme:true,
    },
    reducers:{
        themeToggler:(state)=>{
           state.isLightTheme=!state.isLightTheme;
        }
    }
})

export const {themeToggler}=themeSlice.actions;
export default themeSlice.reducer;

