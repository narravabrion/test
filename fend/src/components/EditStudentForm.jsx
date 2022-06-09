import React, { useEffect } from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { TextInput} from "."
import { useDispatch, useSelector } from "react-redux"
import { fetchStudentByID, updateStudentByID } from "../features/student.slice"
import Loading from "./Loading"

const EditStudent = ({ id }) => {
	const dispatch = useDispatch()
	const loading= useSelector((state)=>state.student.loading)
	useEffect(() => {
		dispatch(fetchStudentByID(id))
	}, [dispatch,id])
	const student= useSelector((state)=>state.student.students)
	return (
		<>
			{loading? <Loading/> : <Formik
				initialValues={{
					firstName: student.first_name,
					lastName: student.last_name,
					reg_number: student.reg_number,
					
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.required("Required"),
					lastName: Yup.string()
						.required("Required"),
					reg_number: Yup.string()
						.required("Required"),
				})}
				onSubmit={(values, { setSubmitting }) => {
						dispatch(updateStudentByID({...values,id:id}))
						
						setSubmitting(false)
					
				}}
			>
				{({values,handleChange})=>(<Form className='border rounded p-1'>
					<TextInput
						label='First Name'
						name='firstName'
						type='text'
						placeholder='John'
						value={values.firstName}
						onChange={(e)=>handleChange(e)}
						
					/>

					<TextInput
						label='Last Name'
						name='lastName'
						type='text'
						placeholder='Doe'
						value={values.lastName}
						onChange={(e)=>handleChange(e)}
					/>

					<TextInput
						label='Registration Number'
						name='reg_number'
						type='reg_number'
						placeholder='reg-22'
						values={values.reg_number}
						onChange={(e)=>handleChange(e)}
					/>

					

					<button
						className='w-full bg-gray-600 rounded flex items-center justify-center text-white font-bold hover:opacity-85'
						type='submit'
					>
						Submit
					</button>
				</Form>)}
			</Formik>}
		</>
	)
}

export default EditStudent
