import React, { useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import { AiFillEye } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Loading } from "."
import { fetchSubjects } from "../features/subject.slice"

const columns = [
	{ field: "id", headerName: "ID", width: 70 },
	{ field: "name", headerName: "name", width: 130 },
	{ field: "cartegory", headerName: "Cartegory", width: 130 },

	{
		field: "actions",
		headerName: "Actions",
		renderCell: (params) => {
			return (
				<>
					<div className='flex justify-between '>
						<Link to={`/edit-subject/${params.row.id}`}>
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


const SubjectTable = () => {
	const subjects = useSelector((state) => state.student.students)
	const loading = useSelector((state) => state.student.loading)

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchSubjects())
	}, [dispatch])
	return (
		<div style={{ height: 400, width: "100%" }}>
			{loading ? (
				<Loading />
			) : (
				<DataGrid
					rows={subjects.map((subject) => {
						return { ...subject, id: subject.subject_id }
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

export default SubjectTable
