import  { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './AuthSlice'
import storage from 'redux-persist/lib/storage' 
import { persistStore, persistReducer } from 'redux-persist'
const persistConfig={
    key:"root",
    storage,
}
const Reducer=persistReducer(persistConfig,AuthSlice);
export const store=configureStore({
    
    reducer:{
        Auth:Reducer
    }
    
})
export const persistor=persistStore(store);