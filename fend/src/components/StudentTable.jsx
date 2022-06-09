import React, { useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import { AiFillDelete, AiFillEye } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchStudents } from "../features/student.slice"
import Loading from "./Loading"

const columns = [
	{ field: "id", headerName: "student ID", width: 70 },
	{ field: "first_name", headerName: "First name", width: 130 },
	{ field: "last_name", headerName: "Last name", width: 130 },
	{ field: "reg_number", headerName: "Reg Number", width: 130 },

	{
		field: "active",
		headerName: "Status",
		width: 130,
		renderCell: (params) => {
			return (
				<div>
					{params.row.active ? (
						<div className='bg-green-500 rounded px-2 py-0.5'>Active</div>
					) : (
						<div className='bg-red-500 rounded px-2 py-0.5'>inactive</div>
					)}
				</div>
			)
		},
	},
	{
		field: "actions",
		headerName: "Actions",
		renderCell: (params) => {
			return (
				<>
					<div className='flex justify-between '>
						<Link to={`/edit-student/${params.row.id}`}>
							<AiFillEye
								size={20}
								className='text-green-700 mx-1 cursor-pointer hover:text-gray-500'
							/>
						</Link>
						
					</div>
				</>
			)
		},
		width: 90,
	},
]

const StudentTable = () => {
	const students = useSelector((state) => state.student.students)
	const loading = useSelector((state) => state.student.loading)

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchStudents())
	}, [dispatch])
	return (
		<div style={{ height: 400, width: "100%" }}>
			{loading ? (
				<Loading />
			) : (
				<DataGrid
					rows={students.map((student) => {
						return { ...student, id: student.student_id }
					})}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[5]}
					checkboxSelection
				/>
			)}
		</div>
	)
}

export default StudentTable
