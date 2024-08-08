import { createSlice } from "@reduxjs/toolkit";
const initialState={
    loading:null,
    error:null,
    user:null,
}
export const AuthSlice=createSlice({
    name:"Authentication",
    initialState:initialState,
    reducers:{
        SetUser:(state,action)=>{
            state.user=action.payload
        },
        LogOut:(state)=>{
state.user=null,
state.error=null,
state.loading=null
        }
    }
})
export const {SetUser,LogOut}=AuthSlice.actions
export default AuthSlice.reducer