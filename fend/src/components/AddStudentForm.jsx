import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { TextInput } from "."
import { useDispatch } from "react-redux"
import { createStudent } from "../features/student.slice"

const AddStudentForm = () => {
	const dispatch = useDispatch()

	return (
		<>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					reg_number: "",
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(40, "Must be 40 characters or less")
						.required("Required"),
					lastName: Yup.string()
						.max(40, "Must be 40 characters or less")
						.required("Required"),
					reg_number: Yup.string()
						.max(40, "Must be 40 characters or less")
						.required("Required"),
				})}
				onSubmit={(values, { setSubmitting }) => {
					dispatch(createStudent(values))
					console.log(values)
					setSubmitting(false)
				}}
			>
				<Form className='border rounded p-1'>
					<TextInput
						label='First Name'
						name='firstName'
						type='text'
						placeholder='John'
					/>

					<TextInput
						label='Last Name'
						name='lastName'
						type='text'
						placeholder='Doe'
					/>

					<TextInput
						label='Registration Number'
						name='reg_number'
						type='reg_number'
						placeholder='reg-22'
					/>

					<button
						className='w-full bg-gray-600 rounded flex items-center justify-center text-white font-bold hover:opacity-85'
						type='submit'
					>
						Submit
					</button>
				</Form>
			</Formik>
		</>
	)
}

export default AddStudentForm
