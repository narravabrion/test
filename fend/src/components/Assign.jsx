import React, { useEffect, useState } from "react"
import { Formik, Form } from "formik"
import { SelectInput } from "."
import { useDispatch, useSelector } from "react-redux"
import { fetchStudentByID } from "../features/student.slice"
import Loading from "./Loading"
import { createUserSubject, fetchSubjects } from "../features/subject.slice"

const Assign = ({ id ,modal,setModal}) => {
	const dispatch = useDispatch()
	const loading = useSelector((state) => state.student.loading)
	useEffect(() => {
		dispatch(fetchStudentByID(id))
	}, [dispatch, id])

	useEffect(() => {
		dispatch(fetchSubjects())
	}, [dispatch])

	const student = useSelector((state) => state.student.students)
	const subjects = useSelector((state) => state.subject.subjects)
	const [error, setError] = useState(false)
	return (
		<>
			<div className='inset-0 z-10 flex items-center justify-center bg-black/50'>
				<div className='w-full max-w-4xl rounded bg-white'>
					{loading ? (
						<Loading />
					) : (
						<Formik
							initialValues={{
								subject: "",
							}}
						
							onSubmit={(values, { setSubmitting }) => {
								setModal(!modal)
								values = { ...values, id: id }
								if (!student.active) {
									setError(true)
								}
								dispatch(createUserSubject(values))

								setSubmitting(false)
							}}
						>
							{({ values, handleChange }) => (
								<Form className='border rounded p-1'>
									{error && (
										<div className='my-1 p-2 font-semibold italic bg-red-300'>
											Cannot assign subject to inactive Student
										</div>
									)}
									<SelectInput label='Subject' name='subject'>
										<option value=''>Select a subject</option>
										{subjects?.map((subject) => {
											return (
												<option
													key={subject.subject_id}
													className='capitalize'
													value={subject.name}
												>
													{subject.name}
												</option>
											)
										})}
									</SelectInput>

									<button
										className='w-full bg-gray-600 rounded flex items-center justify-center text-white font-bold hover:opacity-85'
										type='submit'
									>
										Submit
									</button>
								</Form>
							)}
						</Formik>
					)}
				</div>
			</div>
		</>
	)
}

export default Assign
