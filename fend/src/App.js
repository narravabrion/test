import { useSelector } from "react-redux"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Loading, Navbar } from "./components"
import {
	HomePage,
	SubjectPage,
	AddStudent,
	AddSubject,
	EditSubject,
	Error404,
	EditStudent,
} from "./pages"

function App() {
	const loadingSubject = useSelector((state)=>state.subject.loading)
	const loadingStudent = useSelector((state)=>state.subject.loading)
	return (
		<div>
			<Router>
				<Navbar />
				{loadingStudent && <Loading/>}
				{loadingSubject && <Loading/>}
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/subjects' element={<SubjectPage />} />
					<Route path='/add-student' element={<AddStudent />} />
					<Route path='/add-subject' element={<AddSubject />} />
					<Route path='/edit-subject/:id' element={<EditSubject />} />
					<Route path='/edit-student/:id' element={<EditStudent />} />
					<Route path='*' element={<Error404 />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
