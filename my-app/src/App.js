import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavH from "./components/NavH";
import NavV from "./components/NavV";
import Footer from "./components/Footer";
const App = () => {
	return (
		<div className="App row me-0">
			<BrowserRouter>
				<NavH />
				<NavV />
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
