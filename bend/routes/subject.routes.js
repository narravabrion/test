const express = require("express")
const subjectControllers = require('../controllers/subject.controllers')

const router = express.Router()


router.get('/',subjectControllers.getAllSubjects)
router.get('/:id',subjectControllers.getSubjectByID)
router.post('/create',subjectControllers.createSubject)
router.put('/update/:id',subjectControllers.updateSubjectByID)
router.delete('/delete/:id',subjectControllers.deleteSubjectByID)


module.exports =router