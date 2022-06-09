import React, { useEffect } from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { TextInput, SelectInput } from "."
import { useDispatch, useSelector } from "react-redux"
import { fetchSubjectByID, updateSubjectByID } from "../features/subject.slice"
import Loading from "./Loading"

const EditSubjectForm = ({ id }) => {
	const dispatch = useDispatch()
	const loading = useSelector((state) => state.subject.loading)
	useEffect(() => {
		dispatch(fetchSubjectByID(id))
	}, [dispatch, id])
	const subject = useSelector((state) => state.subject.subjects)

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<Formik
					initialValues={{
						subject: subject.name,
						cartegory: subject.cartegory,
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
						console.log("submit")
						dispatch(updateSubjectByID({ ...values, id: id }))

						setSubmitting(false)
					}}
				>
					{({ values, handleChange }) => (
						<Form className='border rounded p-1'>
							<TextInput
								label='First Name'
								name='firstName'
								type='text'
								placeholder='math'
								value={values.subject}
								onChange={(e) => handleChange(e)}
							/>

							<SelectInput label='Cartegory' name='cartegory'>
								<option value=''>{values.cartegory}</option>
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
					)}
				</Formik>
			)}
		</>
	)
}

export default EditSubjectForm
