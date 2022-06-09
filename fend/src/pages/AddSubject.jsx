import React from "react"
import { AddSubjectForm } from "../components"

const AddSubject = () => {
	return (
		<section className='w-full flex items-center justify-center p-2'>
			<div className='w-full max-w-6xl p-1 '>
				<h3 className='text-xl font-semibold py-2'>Add Subject</h3>
				<AddSubjectForm />
			</div>
		</section>
	)
}

export default AddSubject
