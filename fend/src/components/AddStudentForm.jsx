import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import {TextInput, SelectInput } from "."

const AddStudentForm = () => {
	return (
		<>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					reg_number: "",
				
					subject: "", 
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
					subject: Yup.string()
						.oneOf(["math", "english", "kiswahili"], "Invalid subject")
						.required("Required"),
				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2))
						setSubmitting(false)
					}, 400)
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

					<SelectInput label='Subject' name='subject'>
						<option value=''>Select a subject</option>
						<option value='math'>Math</option>
						<option value='english'>English</option>
						<option value='swahili'>Swahili</option>
					</SelectInput>

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
