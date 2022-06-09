import * as React from "react"
import { DataGrid } from "@mui/x-data-grid"
import { AiFillDelete, AiFillEye } from "react-icons/ai"
import { Link } from "react-router-dom"

const columns = [
	{ field: "id", headerName: "ID", width: 70 },
	{ field: "cartegory", headerName: "First name", width: 130 },
	{ field: "name", headerName: "Last name", width: 130 },

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
	{ id: 1, name: "English", cartegory: "Language",  },
	{ id: 2, name: "Kiswahili", cartegory: "Language" },
	{ id: 3, name: "Science", cartegory: "Science"},
	

]

const SubjectTable = () => {
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

export default SubjectTable




