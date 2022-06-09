import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
	return (
		<>
			<nav className='p-1 flex items-center justify-between bg-gray-700 text-white'>
				<h2 className='text-md font-bold p-1'>Test</h2>
				<ul className='p-1 flex items-center justify-between'>
					<li className='mx-1 px-1 hover:text-gray-200'>
						<Link to='/'>Students</Link>
					</li>
					<li className='mx-1 px-1 hover:text-gray-200'>
						<Link to='/subjects'>Subjects</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Navbar
