const express = require("express")
const studentControllers = require('../controllers/student.controllers')

const router = express.Router()


router.get('/',studentControllers.getAllStudents)
router.get('/:id',studentControllers.getStudentByID)
router.post('/create',studentControllers.createStudent)
router.put('/update/:id',studentControllers.updateStudentByID)
router.delete('/delete/:id',studentControllers.deleteStudentByID)


module.exports =router