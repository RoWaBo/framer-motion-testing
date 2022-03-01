import { Route, Routes } from "react-router-dom";
import LayoutTest from "./pages/LayoutTest";
import Login from "./pages/Login";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LayoutTest />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	);
}

export default App;
