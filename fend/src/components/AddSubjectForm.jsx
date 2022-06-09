import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { TextInput, SelectInput } from "."

const AddSubjectForm = () => {
	return (
		<>
			<Formik
				initialValues={{
					subject: "",
					cartegory: "", 
				}}
				validationSchema={Yup.object({
					subject: Yup.string()
						.max(40, "Must be 40 characters or less")
						.required("Required"),
					
					cartegory: Yup.string()
						.oneOf(["humanity", "science", "industrial"], "Invalid cartegory")
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
						label='Subject'
						name='subject'
						type='text'
						placeholder='math'
					/>

			

					<SelectInput label='Cartegory' name='cartegory'>
						<option value=''>Select a cartegory</option>
						<option value='humanity'>Humanity</option>
						<option value='science'>Science</option>
						<option value='industrial'>Industrial</option>
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

export default AddSubjectForm
