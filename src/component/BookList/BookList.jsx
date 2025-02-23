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
				<h2>Quantum Books</h2>
			</Link>

			<ul>
				{books.length > 0 ? (
					books.map((book) => (
						<li key={book.id}>
							<div>Title: {book.title}</div>
							<div>Author: {book.author}</div>
						</li>
					))
				) : (
					<p>No books available</p>
				)}
			</ul>
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
