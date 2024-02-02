import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "../FirebasePages/main/main";
import { Login } from "../FirebasePages/Login";
import { Navbar } from "../components/navbar";
import "../nav.css";
import { CreatePost } from "../FirebasePages/create-post/create-post";
function FirebaseApp() {
	return (
		<>
			<div className="container">
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/login" element={<Login />} />
						<Route path="/createpost" element={<CreatePost />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default FirebaseApp;
