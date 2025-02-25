import React, { useState, useEffect } from "react";
import AddBook from "../AddBook/AddBook";
import booksData from "../../data/QunatumBooks.json";
import { Link } from "react-router-dom";

export default function BookList() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		setBooks(booksData);
	}, []);

	const addBook = (newBook) => {
		const updatedBooks = [...books, newBook];
		setBooks(updatedBooks);

		localStorage.setItem("books", JSON.stringify(updatedBooks));
	};

	return (
		<>
			<Link to="/Quantum Books">
				<h2 className="text-2xl text-[#0f334d] font-semibold text-center mt-6">
					Quantum Books
				</h2>
			</Link>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-4">
				{books.length > 0 ? (
					books.map((book) => (
						<div
							key={book.id}
							className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
						>
							<img
								src={book.image}
								alt={book.title}
								className="w-full h-48 object-cover"
							/>
							<div className="flex flex-col p-6 flex-grow">
								<h3 className="text-xl font-semibold mb-2 text-[#0f334d]">
									{book.title}
								</h3>
								<p className="text-[#e03a50]">Author: {book.author}</p>
								<p className="text-gray-700 mb-4 italic font-light line-clamp-3 flex-grow">
									{book.summary}
								</p>
								<div className="mt-auto">
									<a
										href={book.Link}
										target="_blank"
										rel="noopener noreferrer"
										className="block"
									>
										<button className="w-full bg-sky-500 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300">
											View Book Details
										</button>
									</a>
								</div>
							</div>
						</div>
					))
				) : (
					<p className="text-center text-gray-600 text-lg">
						No books available
					</p>
				)}
			</div>
		</>
	);
}
