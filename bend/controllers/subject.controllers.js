const pool = require("../db/db")

const createSubject = async (req, res) => {
	try {
		const { first_name, last_name, reg_number } = req.body
		console.log(req.body)
		const newSubject = await pool.query(
			`INSERT INTO subjects(name, cartegory) VALUES($1, $2)`,
			[first_name, last_name, reg_number]
		)
		res.json(newSubject)
	} catch (error) {
		console.log(error)
	}
}
const getAllSubjects = async (req, res) => {
	try {
		const subjects = await pool.query(`SELECT * FROM subjects`)
		res.json(subjects.rows)
	} catch (error) {
		console.log(error)
	}
}
const getSubjectByID = async (req, res) => {
	try {
		const student = await pool.query(
			"SELECT * FROM subjects WHERE subject_id = $1",
			[req.params.id]
		)
		res.json(student.rows[0])
	} catch (error) {
		console.log(error)
	}
}
const updateSubjectByID = async (req, res) => {
	try {
		const { name, cartegory } = req.body
		const student = await pool.query(
			"UPDATE subjects SET name=$1, name=$2,   WHERE subject_id = $3",
			[name, cartegory, req.params.id]
		)
		res.json(student)
	} catch (error) {
		console.log(error)
	}
}
const deleteSubjectByID = async (req, res) => {
	try {
		const student = await pool.query(
			"DELETE FROM subjects WHERE subject_id = $1",
			[req.params.id]
		)
		res.json(student)
	} catch (error) {
		console.log(error)
	}
}
module.exports = {
	createSubject,
	getAllSubjects,
	getSubjectByID,
	updateSubjectByID,
    deleteSubjectByID
}
