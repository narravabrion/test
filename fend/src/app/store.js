import { configureStore } from "@reduxjs/toolkit"
import studentReducer from "../features/student.slice"
import subjectReducer from "../features/subject.slice"

const store = configureStore({
	reducer: {
		student: studentReducer,
		subject: subjectReducer,
	},
})

export default store
