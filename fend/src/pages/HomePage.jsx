import React from "react"
import { Link } from "react-router-dom"
import { StudentTable } from "../components"

const HomePage = () => {
	return (
		<>
			<section className='w-full flex items-center justify-center p-2'>
				<div className='w-full max-w-6xl p-1 '>
					<div className='flex items-center justify-between'>
						{" "}
						<h3 className='text-xl font-semibold py-2'>All Students</h3>
                        <Link className='text-lg font-semibold p-1 bg-gray-400 rounded hover:text-white' to='/add-student'>Add Student</Link>
					</div>
					<StudentTable />
				</div>
			</section>
		</>
	)
}

export default HomePage
