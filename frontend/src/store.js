import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/reducers/userSlice'
export const store = configureStore({
    reducer : {
        user : userReducer
    }
})
