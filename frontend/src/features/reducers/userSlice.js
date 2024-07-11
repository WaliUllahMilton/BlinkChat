import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
// import { redirect } from 'react-router-dom'

const initialState = {
    isLoading : true,
    id : null,
    name : null,
    email : null,
    phone : null,
    address : null,
    status : "",
    error : null,
}
export const userSignUp = createAsyncThunk("user/signup",
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
                    if(response.status === 201){
                        // navigate("/home")
                        return response.data;
                    }
                } catch (error) {
                    console.log(error)
                    return rejectWithValue(error.response.data.message);
                }
            }
        )
export const userLogin = createAsyncThunk("user/login",
    async ({email,password},{rejectWithValue})=>{
        try {
            const response= await axios.post("http://localhost:3000/login",{
                email,
                password
            })
            localStorage.setItem("user",JSON.stringify(response.data))
            return response.data
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message)
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
            state.status = "ok";
            state.id = action.payload.user._id;
            state.name = action.payload.user.name;
            state.email = action.payload.user.email;
            state.address = action.payload.user.address;
            state.phone =action.payload.user.phone;
            state.error = null;
            localStorage.setItem("user",JSON.stringify({
                id : action.payload.user._id,
                name : action.payload.user.name,
                email : action.payload.user.email,
                address : action.payload.user.addCase,
                phone : action.payload.user.phone,
                token : action.payload.token
            }))
        }).addCase(userSignUp.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload; // Store the error message
        }).addCase(userLogin.pending,(state)=>{
            state.status = "pending";
        }).addCase(userLogin.fulfilled,(state,action)=>{
            state.isLoading = false
            state.status = "ok";
            state.id = action.payload.data._id;
            state.name = action.payload.data.name;
            state.email = action.payload.data.email;
            state.address = action.payload.data.address;
            state.phone =action.payload.data.phone;
            state.error = null;
        }).addCase(userLogin.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.payload; 
        })
    }
})

export default userSlice.reducer;
