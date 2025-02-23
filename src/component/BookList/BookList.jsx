import React, { useState, useEffect } from "react";
import AddBook from "../AddBook/AddBook";
import booksData from "../../data/QunatumBooks.json";
import { Link } from "react-router-dom";

export default function BookList() {
	const [books, setBooks] = useState([]);

	// Set the books state directly from the imported JSON data
	useEffect(() => {
		setBooks(booksData);
	}, []);

	const addBook = (newBook) => {
		const updatedBooks = [...books, newBook];
		setBooks(updatedBooks);

		// Save the updated book list to localStorage
		localStorage.setItem("books", JSON.stringify(updatedBooks));
	};

	return (
		<>
			<Link to="/Quantum Books">
				<h2 className="text-2xl font-semibold text-center mt-6">
					Quantum Books
				</h2>
			</Link>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-4">
				{books.length > 0 ? (
					books.map((book) => (
						<div
							key={book.id}
							className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
						>
							<img
								src={book.image}
								alt={book.title}
								className="w-32 h-48 object-cover mb-4 rounded-md"
							/>
							<div className="text-xl font-semibold mb-2">{book.title}</div>
							<div className="text-sm text-gray-600 mb-2">{book.author}</div>
							<div className="text-sm text-gray-500 mb-4">{book.summary}</div>
							<a href={book.Link} target="_blank" rel="noopener noreferrer">
								<button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
									Link to the Webpage
								</button>
							</a>
						</div>
					))
				) : (
					<p>No books available</p>
				)}
			</div>

			<AddBook addBook={addBook} />
		</>
	);
}

// import React, { useEffect, useState } from "react";
// import AddBook from "../AddBook/AddBook";

// export default function BookList() {
// 	const [books, setBooks] = useState([]);

// 	useEffect(() => {
// 		// Check localStorage for saved books
// 		const savedBooks = localStorage.getItem("books");
// 		if (savedBooks) {
// 			setBooks(JSON.parse(savedBooks));
// 		}
// 	}, []); // This runs only once when the component mounts

// 	const addBook = (newBook) => {
// 		const updatedBooks = [...books, newBook];
// 		setBooks(updatedBooks);

// 		// Save the updated book list to localStorage
// 		localStorage.setItem("books", JSON.stringify(updatedBooks));
// 	};

// 	return (
// 		<>
// 			<h2>Quantum Books</h2>
// 			<AddBook addBook={addBook} />
// 			<ul>
// 				{books.length > 0 ? (
// 					books.map((book) => (
// 						<li key={book.id}>
// 							<div>Title: {book.title}</div>
// 							<div>Author:{book.author}</div>
// 						</li>
// 					))
// 				) : (
// 					<p>No books available</p>
// 				)}
// 			</ul>
// 		</>
// 	);
// }
