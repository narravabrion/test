// Uses AuthService to make asynchronous HTTP requests {triggers one or more dispatch in the result.}

// register():
// - calls the AuthService.register(user registration data)
// - dispatch setMessage if successful/failed

// login()
// calls the AuthService.login(username, password)
// dispatch setMessage if successful/failed

// – logout(): calls the AuthService.logout().

// setMessage is imported from message slice

// CreateAsyncThunk dispatches the right actions based on the returned promise.
// Async Thunks to be exported:{register, login, logout}

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { useDispatch } from "react-redux"
import authService from "../services/auth.service"
import { setMessage } from "./message"
const user = JSON.parse(localStorage.getItem("user"))

export const registerUser = createAsyncThunk(
	"auth/register",
	async (data, thunkAPI) => {
		try {
			const response = await authService.registerUser(data)
			thunkAPI.dispatch(setMessage("Registration successfull"))
			console.log(response.data)
			return response.data
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()

			// thunkAPI.dispatch(setMessage("registration failed"))
			thunkAPI.dispatch(setMessage(message))
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const login = createAsyncThunk(
	"auth/login",
	async (email, password, thunkAPI) => {
		try {
			const data = await authService.login(email, password)
			console.log(data)
			return { user: data }
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			thunkAPI.dispatch(setMessage(message))
			thunkAPI.rejectWithValue()
		}
	}
)

export const logout = createAsyncThunk("auth/logout", async () => {
	await authService.logout()
})

// creating slice

const initialState = user
	? { isLoggedIn: true, user }
	: { isLoggedIn: false, user: null }

const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.fulfilled, (state, action) => {
				state.isLoggedIn = false
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.isLoggedIn = false
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoggedIn = true
				state.user = action.payload.user
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoggedIn = false
				state.user = null
			})
			.addCase(logout.fulfilled, (state, action) => {
				state.isLoggedIn = false
				state.user = null
			})
	},
})

export default authSlice.reducer