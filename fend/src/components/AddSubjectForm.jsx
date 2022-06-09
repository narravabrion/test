import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { TextInput, SelectInput } from "."
import { useDispatch } from "react-redux"
import { createSubject } from "../features/subject.slice"

const AddSubjectForm = () => {
	const dispatch = useDispatch()
	return (
		<>
			<Formik
				initialValues={{
					subject: "",
					cartegory: "",
				}}
				validationSchema={Yup.object({
					subject: Yup.string().required("Required"),

					cartegory: Yup.string()
						.oneOf(
							["humanity", "science", "industrial", "language"],
							"Invalid cartegory"
						)
						.required("Required"),
				})}
				onSubmit={(values, { setSubmitting }) => {
					dispatch(createSubject(values))
					setSubmitting(false)
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
						<option value='language'>Language</option>
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
