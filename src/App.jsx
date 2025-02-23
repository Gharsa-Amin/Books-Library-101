import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./component/BookList/BookList";
import BlockchainBookList from "./component/BookListBlockchain/BookListBlockchain";
import Home from "./component/Home/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/QuantumBooks" element={<BookList />} />
				<Route path="/BlockchainBooks" element={<BlockchainBookList />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
