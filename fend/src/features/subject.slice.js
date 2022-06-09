import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
	subjects: [],
	loading: false,
	error: "",
}

export const fetchSubjects = createAsyncThunk("/", async() => {
	return await axios
		.get("http://127.0.0.1:8080/api/v1/subject")
		.then((res) => res.data)
})
export const fetchSubjectByID = createAsyncThunk("/get-subject/:id", async(id) => {
	return await axios
		.get(`http://127.0.0.1:8080/api/v1/subject/${id}`)
		.then((res) => res.data)
})
export const updateSubjectByID = createAsyncThunk("/update/:id",async (values) => {
	console.log(values)
	const {id}=values
	return await axios
		.put(`http://127.0.0.1:8080/api/v1/subject/update/${id}`,values)
		.then((res) => res.data)
})
export const createSubject = createAsyncThunk("/create", async(values) => {
	return await axios
		.post("http://127.0.0.1:8080/api/v1/subject/create",values)
		.then((res) => res.data)
})
export const createUserSubject = createAsyncThunk("/user-subject", async(values) => {
	return await axios
		.post("http://127.0.0.1:8080/api/v1/subject/user-subject",values)
		.then((res) => res.data)
})
export const deleteSubjectByID = createAsyncThunk("/delete/:id",async (id) => {
	return await axios
		.delete(`http://127.0.0.1:8080/api/v1/subject/delete/${id}`)
		.then((res) => res.data)
})
const subjectSlice = createSlice({
	name: "subject",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchSubjects.pending, (state) => {
			state.loading = true
		})
		builder.addCase(fetchSubjects.fulfilled, (state, action) => {
			state.loading = false
			state.subjects = action.payload
			state.error = ""
		})
		builder.addCase(fetchSubjects.rejected, (state, action) => {
			state.loading = false
			state.subjects = []
			state.error = action.error.message
		})
		builder.addCase(fetchSubjectByID.pending, (state) => {
			state.loading = true
		})
		builder.addCase(fetchSubjectByID.fulfilled, (state, action) => {
			state.loading = false
			state.subjects = action.payload
			state.error = ""
		})
		builder.addCase(fetchSubjectByID.rejected, (state, action) => {
			state.loading = false
			state.subjects = []
			state.error = action.error.message
		})

		builder.addCase(updateSubjectByID.pending, (state) => {
			state.loading = true
		})
		builder.addCase(updateSubjectByID.fulfilled, (state, action) => {
			state.loading = false
			state.subjects = action.payload
			state.error = ""
		})
		builder.addCase(updateSubjectByID.rejected, (state, action) => {
			state.loading = false
			state.subjects = []
			state.error = action.error.message
		})

		builder.addCase(createSubject.pending, (state) => {
			state.loading = true
		})
		builder.addCase(createSubject.fulfilled, (state, action) => {
			state.loading = false
			state.subjects = action.payload
			state.error = ""
		})
		builder.addCase(createSubject.rejected, (state, action) => {
			state.loading = false
			state.subjects = []
			state.error = action.error.message
		})

		builder.addCase(deleteSubjectByID.pending, (state) => {
			state.loading = true
		})
		builder.addCase(deleteSubjectByID.fulfilled, (state, action) => {
			state.loading = false
			state.subjects = action.payload
			state.error = ""
		})
		builder.addCase(deleteSubjectByID.rejected, (state, action) => {
			state.loading = false
			state.subjects = []
			state.error = action.error.message
		})

		builder.addCase(createUserSubject.pending, (state) => {
			state.loading = true
		})
		builder.addCase(createUserSubject.fulfilled, (state, action) => {
			state.loading = false
			state.subjects = action.payload
			state.error = ""
		})
		builder.addCase(createUserSubject.rejected, (state, action) => {
			state.loading = false
			state.subjects = []
			state.error = action.error.message
		})
	},
})

export default subjectSlice.reducer
