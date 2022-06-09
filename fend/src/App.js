import {BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { Navbar } from "./components";
import { HomePage, SubjectPage,AddStudent, AddSubject } from "./pages";

function App() {
	return <div>

		<Router>
			<Navbar/>
			<Routes>
				<Route path="/" element={<HomePage/>}/>
				<Route path="/subjects" element={<SubjectPage/>}/>
				<Route path="/add-student" element={<AddStudent/>}/>
				<Route path="/add-subject" element={<AddSubject/>}/>
			</Routes>
		</Router>
	</div>
}

export default App
