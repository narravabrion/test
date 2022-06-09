const express = require("express")
const subjectControllers = require("../controllers/subject.controllers")

const router = express.Router()

router.get("/", subjectControllers.getAllSubjects)
router.get("/:id", subjectControllers.getSubjectByID)
router.get("/usersubject/:id", subjectControllers.getUserSubjectsByID)
router.post("/create", subjectControllers.createSubject)
router.post("/user-subject", subjectControllers.createSubject)
router.put("/update/:id", subjectControllers.updateSubjectByID)
router.delete("/delete/:id", subjectControllers.deleteSubjectByID)

module.exports = router
