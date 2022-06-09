const pool = require("../db/db")

const createStudent = async (req, res) => {
	try {
		const { first_name, last_name, reg_number } = req.body
		console.log(req.body)
		const newStudent = await pool.query(
			`INSERT INTO students(first_name, last_name, reg_number) VALUES($1, $2, $3)`,
			[first_name, last_name, reg_number]
		)
		res.json(newStudent)
	} catch (error) {
		console.log(error)
	}
}
const getAllStudents = async (req, res) => {
	try {
		const students = await pool.query(`SELECT * FROM students`)
		res.json(students.rows)
	} catch (error) {
		console.log(error)
	}
}
const getStudentByID = async (req, res) => {
	try {
		const student = await pool.query(
			"SELECT * FROM students WHERE student_id = $1",
			[req.params.id]
		)
		res.json(student.rows[0])
	} catch (error) {
		console.log(error)
	}
}
const updateStudentByID = async (req, res) => {
	try {
		const { first_name, last_name, reg_number } = req.body
		const student = await pool.query(
			"UPDATE students SET first_name=$1, last_name=$2, reg_number=$3  WHERE student_id = $4",
			[first_name, last_name, reg_number, req.params.id]
		)
		res.json(student)
	} catch (error) {
		console.log(error)
	}
}
const deleteStudentByID = async (req, res) => {
	try {
		const student = await pool.query(
			"DELETE FROM students WHERE student_id = $1",
			[req.params.id]
		)
		res.json(student)
	} catch (error) {
		console.log(error)
	}
}
module.exports = {
	createStudent,
	getAllStudents,
	getStudentByID,
	updateStudentByID,
    deleteStudentByID
}
