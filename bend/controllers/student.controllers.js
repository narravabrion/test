const pool = require("../db/db")

const createStudent = async (req, res) => {
	try {
		const { firstName, lastName, reg_number } = req.body
		const active = true
		await pool.query(
			`INSERT INTO students(first_name, last_name, active, reg_number) VALUES($1, $2, $3, $4)`,
			[firstName, lastName, active, reg_number]
		)
		res.status(200).json({msg:'user created successfully'})
	} catch (error) {
		res.status(500).json({error:error.message})
	}
}
const getAllStudents = async (req, res) => {
	try {
		const students = await pool.query(`SELECT * FROM students`)
		res.status(200).json(students.rows)
	} catch (error) {
		res.status(500).json({error:error.message})
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
		const { firstName, lastName, reg_number } = req.body
		const student = await pool.query(
			"UPDATE students SET first_name=$1, last_name=$2, reg_number=$3  WHERE student_id = $4",
			[firstName, lastName, reg_number, req.params.id]
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
