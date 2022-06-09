import React from "react"
import { Link } from "react-router-dom"


const Error404 = () => {
	return (
		<section className='w-full flex items-center justify-center p-2'>
			<div className='w-full max-w-6xl p-1 '>
				<div className='flex items-center flex-row justify-center'>
					{" "}
					<h3 className='text-3xl font-bold py-2 text-gray-500'>ERROR 404</h3>
                    <h3 className="text-xl font-semibold p-2">PAGE CANNOT BE FOUND</h3>
					<Link
						className='text-lg font-semibold p-1 bg-gray-400 rounded hover:text-white'
						to='/'
					>
						Back Home
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Error404
