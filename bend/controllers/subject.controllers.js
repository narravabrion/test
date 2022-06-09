const pool = require("../db/db")

const createSubject = async (req, res) => {
	try {
		const { subject,cartegory } = req.body
		console.log(req.body)
		const newSubject = await pool.query(
			"INSERT INTO subjects(name, cartegory) VALUES($1, $2)",
			[subject,cartegory]
		)
		res.status(200).json(newSubject)
	} catch (error) {
		res.status(500).json({error:error.message})
	}
}
const createUserSubject = async (req, res) => {
	try {
		const { subject,id } = req.body
		console.log(req.body)
		const newSubject = await pool.query(
			"INSERT INTO subjects(name, student_id) VALUES($1, $2)",
			[subject,id]
		)
		res.status(200).json(newSubject)
	} catch (error) {
		res.status(500).json({error:error.message})
	}
}
const getAllSubjects = async (req, res) => {
	try {
		const subjects = await pool.query(`SELECT * FROM subjects`)
		res.status(200).json(subjects.rows)
	} catch (error) {
		res.status(500).json({error:error.message})
	}
}
const getSubjectByID = async (req, res) => {
	try {
		const student = await pool.query(
			"SELECT * FROM subjects WHERE subject_id = $1",
			[req.params.id]
		)
		res.status(200).json(student.rows[0])
	} catch (error) {
		res.status(500).json({error:error.message})
	}
}
const getUserSubjectsByID = async (req, res) => {
	console.log(1)
	try {
		const student = await pool.query(
			"SELECT * FROM subjects WHERE subject_id = $1",
			[req.params.id]
		)
		res.status(200).json(student.rows)
	} catch (error) {
		console.log(error)
		res.status(500).json({error:error.message})
	}
}
const updateSubjectByID = async (req, res) => {
	try {
		console.log(req.body)
		const { subject, cartegory } = req.body
		const student = await pool.query(
			"UPDATE subjects SET name=$1, cartegory=$2   WHERE subject_id = $3",
			[subject, cartegory, req.params.id]
		)
		res.status(200).json(student)
	} catch (error) {
		console.log(error)
		res.status(500).json({error:error.message})
	}
}
const deleteSubjectByID = async (req, res) => {
	try {
		const student = await pool.query(
			"DELETE FROM subjects WHERE subject_id = $1",
			[req.params.id]
		)
		res.status(200).json(student)
	} catch (error) {
		res.status(500).json({error:error.message})
	}
}
module.exports = {
	createSubject,
	getAllSubjects,
	getSubjectByID,
	updateSubjectByID,
    deleteSubjectByID,
	createUserSubject,
	getUserSubjectsByID
}
