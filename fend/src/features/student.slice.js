import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
	students: [],
	loading: false,
	error: "",
}

export const fetchStudents = createAsyncThunk("/", async () => {
	return await axios
		.get("http://127.0.0.1:8080/api/v1/student")
		.then((res) => res.data)
        
})
export const fetchStudentByID = createAsyncThunk("/get-student/:id", async(id) => {
	return axios
		.get(`http://127.0.0.1:8080/api/v1/student/${id}`)
		.then((res) => res.data)
})
export const updateStudentByID = createAsyncThunk("/update/:id", async (values) => {
	
	const {id}=values
	return await axios
		.put(`http://127.0.0.1:8080/api/v1/student/update/${id}`,values)
		.then((res) => res.data)
})
export const createStudent = createAsyncThunk("/create", async (values) => {
	return await axios
		.post("http://127.0.0.1:8080/api/v1/student/create",values)
		.then((res) => res.data)
})
export const deleteStudentByID = createAsyncThunk("/delete/:id", async(id) => {
	return axios
		.delete(`http://127.0.0.1:8080/api/v1/student/delete/${id}`)
		.then((res) => res.data)
})
const studentSlice = createSlice({
	name: "student",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchStudents.pending, (state) => {
			state.loading = true
		})
		builder.addCase(fetchStudents.fulfilled, (state, action) => {
			state.loading = false
			state.students = action.payload
			state.error = ""
		})
		builder.addCase(fetchStudents.rejected, (state, action) => {
			state.loading = false
			state.students = []
			state.error = action.error.message
		})
		builder.addCase(fetchStudentByID.pending, (state) => {
			state.loading = true
		})
		builder.addCase(fetchStudentByID.fulfilled, (state, action) => {
			state.loading = false
			state.students = action.payload
			state.error = ""
		})
		builder.addCase(fetchStudentByID.rejected, (state, action) => {
			state.loading = false
			state.students = []
			state.error = action.error.message
		})

		builder.addCase(updateStudentByID.pending, (state) => {
			state.loading = true
		})
		builder.addCase(updateStudentByID.fulfilled, (state, action) => {
			state.loading = false
			state.students = action.payload
			state.error = ""
		})
		builder.addCase(updateStudentByID.rejected, (state, action) => {
			state.loading = false
			state.students = []
			state.error = action.error.message
		})

		builder.addCase(createStudent.pending, (state) => {
			state.loading = true
		})
		builder.addCase(createStudent.fulfilled, (state, action) => {
			state.loading = false
			state.students = action.payload
			state.error = ""
		})
		builder.addCase(createStudent.rejected, (state, action) => {
			state.loading = false
			state.students = []
			state.error = action.error.message
		})

		builder.addCase(deleteStudentByID.pending, (state) => {
			state.loading = true
		})
		builder.addCase(deleteStudentByID.fulfilled, (state, action) => {
			state.loading = false
			state.students = action.payload
			state.error = ""
		})
		builder.addCase(deleteStudentByID.rejected, (state, action) => {
			state.loading = false
			state.students = []
			state.error = action.error.message
		})
	},
})

export default studentSlice.reducer
