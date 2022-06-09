import { useField } from "formik"

import React from "react"

const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props)
	return (
		<>
			<div className='py-2 w-full mx-1 overflow-hidden'>
				<label
					className='block text-md text-gray-700'
					htmlFor={props.id || props.name}
				>
					{label}
				</label>
				<input className='border-b w-11/12' {...field} {...props} />
				{meta.touched && meta.error ? (
					<div className='bg-red-500/50 rounded text-xs px-1 w-11/12 mt-1'>{meta.error}</div>
				) : null}
			</div>
		</>
	)
}

export default TextInput
