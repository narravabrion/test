import React from "react"
import { useField } from "formik"

const SelectInput = ({ label, ...props }) => {
	const [field, meta] = useField(props)
	return (
		<>
			<div className='py-2 w-full mx-1'>
				<label
					className='block text-md text-gray-700'
					htmlFor={props.id || props.name}
				>
					{label}
				</label>
				<select className='border rounded ' {...field} {...props} />
				{meta.touched && meta.error ? (
					<div className='bg-red-500/50 rounded text-xs px-1 w-11/12 mt-1'>{meta.error}</div>
				) : null}
			</div>
		</>
	)
}

export default SelectInput
