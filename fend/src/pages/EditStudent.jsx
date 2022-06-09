import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Assign, EditStudentForm } from "../components"
import { useDispatch } from "react-redux"
import { deleteStudentByID } from "../features/student.slice"

const EditStudent = () => {
	const [modal, setModal] = useState(false)
	const [subjects, setSubjects] = useState([])
	const { id } = useParams()
	const dispatch = useDispatch()
	const handleDelete = () => {
		dispatch(deleteStudentByID(id))
	}

	useEffect(() => {
		const fetchSubjects = async () => {
			try {
				const res = await axios.get(
					` http://127.0.0.1:8080/api/v1/subject/usersubject/${id}`
				)

				setSubjects(res.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchSubjects()
	}, [id])
	console.log(subjects)
	const handleModal = () => {
		setModal(!modal)
	}
	return (
		<section className='w-full flex flex-col items-center justify-center p-2'>
			<div className='w-full max-w-6xl p-1 '>
				<h3 className='text-xl font-semibold py-2'>Student {id}</h3>
				<EditStudentForm id={id} />
				<button
					className='w-full rounded bg-red-700 text-white font-semibold p-1 my-1 hover:opacity-80'
					onClick={handleDelete}
				>
					Delete Student
				</button>
			</div>
			<div className='w-full py-2 max-w-6xl'>
				<div className='py-2 flex items-center justify-between'>
					<h3 className='text-lg font-semibold text-gray-400'>
						Assigned Subjects
					</h3>
					<button
						onClick={handleModal}
						className='bg-gray-400 rounded p-1 font-semibold hover:text-gray-200'
					>
						Assign
					</button>
				</div>
				<div className='border border-gray-200 rounded p-2 flex items-center justify-between'>
					{subjects?.map((subject, idx) => {
						return (
							<p key={idx} className=''>
								{subject.name}
							</p>
						)
					})}
				</div>
				{modal && <Assign modal={modal} setModal={setModal} id={id} />}
			</div>
		</section>
	)
}

export default EditStudent
