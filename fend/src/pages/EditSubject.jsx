import React from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { EditSubjectForm } from "../components"
import { deleteSubjectByID } from "../features/subject.slice"

const EditSubjects = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const handleDelete = () => {
		dispatch(deleteSubjectByID(id))
	}
	return (
		<section className='w-full flex items-center justify-center p-2'>
			<div className='w-full max-w-6xl p-1 '>
				<h3 className='text-xl font-semibold py-2'>Subject {id}</h3>
				<EditSubjectForm id={id} />
				<button
					className='w-full rounded bg-red-700 text-white font-semibold p-1 my-1 hover:opacity-80'
					onClick={handleDelete}
				>
					Delete Subject
				</button>
			</div>
		</section>
	)
}

export default EditSubjects
