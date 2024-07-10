import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    id : null,
    name : null,
    email : null,
    phone : null,
    address : null,
    status : "",
    error : null,
}
export const userSignUp = createAsyncThunk("POST/userSignUp",
            async({name, email, phone, address, password},{rejectWithValue})=>{
                // const {name,email,phone,address,password} = formData
                try {
                    const response = await axios.post("http://localhost:3000/registration",{
                        name,
                        email,
                        phone,
                        address,
                        password
                    })
                    return response.data;
                } catch (error) {
                    console.log(error)
                    return rejectWithValue(error.response.data.message);
                }
            }
        )

const userSlice = createSlice({
    name : "user",
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(userSignUp.pending,(state)=>{
            state.status = "pending";
        }).addCase(userSignUp.fulfilled,(state,action)=>{
            state.status = "successfully sign up";
            state.id = action.payload.data._id;
            state.name = action.payload.data.name;
            state.email = action.payload.data.email;
            state.address = action.payload.data.address;
            state.phone =action.payload.data.phone;
            state.error = null;
        }).addCase(userSignUp.rejected, (state, action) => {
            state.status = "sign up failed";
            state.error = action.payload; // Store the error message
        });
    }
})

export default userSlice.reducer;
