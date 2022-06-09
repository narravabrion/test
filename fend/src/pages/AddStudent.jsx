import React from "react"
import { AddStudentForm } from "../components"

const AddStudent = () => {
	return (
		<section className='w-full flex items-center justify-center p-2'>
			<div className='w-full max-w-6xl p-1 '>
				<h3 className='text-xl font-semibold py-2'>Add Student</h3>
                <AddStudentForm/>
			</div>
		</section>
	)
}

export default AddStudent
