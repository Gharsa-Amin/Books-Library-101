import React, { useState, useEffect } from "react";
import AddBlockchainBooks from "../AddBlockchainBooks/AddBlockchainBooks";
import BlockchainBooksData from "../../data/BlockchainBooks.json";

export default function BlockchainBookList() {
	const [books, setBooks] = useState([]);

	// Set the books state directly from the imported JSON data
	useEffect(() => {
		setBooks(BlockchainBooksData);
	}, []);

	const addBook = (newBook) => {
		const updatedBooks = [...books, newBook];
		setBooks(updatedBooks);

		// Save the updated book list to localStorage
		localStorage.setItem("books", JSON.stringify(updatedBooks));
	};

	return (
		<>
			<h2>Blockchain Books</h2>
			<AddBlockchainBooks addBook={AddBlockchainBooks} />
			<ul>
				{books.length > 0 ? (
					books.map((book) => (
						<li key={book.id}>
							<div>{book.title}</div>
							<div>{book.author}</div>
						</li>
					))
				) : (
					<p>No books available</p>
				)}
			</ul>
		</>
	);
}
