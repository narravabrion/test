import * as React from "react"
import { DataGrid } from "@mui/x-data-grid"
import { AiFillDelete, AiFillEye } from "react-icons/ai"
import { Link } from "react-router-dom"

const columns = [
	{ field: "id", headerName: "ID", width: 70 },
	{ field: "first_name", headerName: "First name", width: 130 },
	{ field: "last_name", headerName: "Last name", width: 130 },
	{ field: "reg_number", headerName: "Reg Number", width: 130 },

	
	{
		field: "status",
		headerName: "Status",
		width: 130,
		renderCell: (params) => {
			return (
				<div>
					{params.row.isActive ? (
						<div className='bg-green-500 rounded px-2 py-0.5'>
							Active
						</div>
					) : (
						<div className='bg-red-500 rounded px-2 py-0.5'>
							inactive
						</div>
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
						<Link to='/profile/seller/requests/request-details'>
							<AiFillEye
								size={20}
								className='text-green-700 mx-1 cursor-pointer hover:text-gray-500'
							/>
						</Link>
						<AiFillDelete
							size={20}
							className='text-red-700 mx-1 cursor-pointer hover:text-gray-500'
						/>
					</div>
				</>
			)
		},
		width: 90,
	},
]

const rows = [
	{ id: 1, last_name: "Snow", first_name: "Jon", reg_number: 'reg-22',isActive:true },
	{ id: 2, last_name: "Lannister", first_name: "Cersei", reg_number: 'reg-23',isActive:true },
	{ id: 3, last_name: "Lannister", first_name: "Jaime", reg_number: 'reg-24' ,isActive:false},
	{ id: 4, last_name: "Stark", first_name: "Arya", reg_number: 'reg-25' ,isActive:true},

]

const StudentTable = () => {
	return (
		<div style={{ height: 400, width: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	)
}

export default StudentTable
