import axios from "axios"
import authHeader from "./auth-header"

const getAllUstudents = async () => {
	return axios.get("url")
}

const addStudent = async () => {
	return axios.get("url", { headers: authHeader() })
}

const getStudentByID = async () => {
	return axios.get("url", { headers: authHeader() })
}

const updateStudent = async () => {
	return axios.get("url", { headers: authHeader() })
}
const deleteStudentById = async () => {
	return axios.get("url", { headers: authHeader() })
}

const studentService = {
	getAllUstudents,
	addStudent,
	getStudentByID,
	updateStudent,
	deleteStudentById,
}

export default studentService
