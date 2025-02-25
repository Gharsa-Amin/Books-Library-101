import React, { useState, useEffect } from "react";
import AddBlockchainBooks from "../AddBlockchainBooks/AddBlockchainBooks";
import BlockchainBooksData from "../../data/BlockchainBooks.json";

export default function BlockchainBookList() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		setBooks(BlockchainBooksData);
	}, []);

	const addBook = (newBook) => {
		const updatedBooks = [...books, newBook];
		setBooks(updatedBooks);
		localStorage.setItem("books", JSON.stringify(updatedBooks));
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<h2 className="text-3xl text-[#0f334d] font-bold text-center mb-12 mt-12">
				Blockchain Blocks
			</h2>
			<button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">
				Start Reading
			</button>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-6 "
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
				/>
			</svg>
			{books.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 shadow-sm">
					{books.map((book) => (
						<div
							key={book.id}
							className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
						>
							<img
								src={book.image}
								alt={book.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2 text-[#0f334d]">
									{book.title}
								</h3>
								<p className="text-[#e03a50]">Author: {book.author}</p>
								<p className="text-gray-700 mb-4 italic font-light line-clamp-3">
									{book.summary}
								</p>
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
					))}
				</div>
			) : (
				<p className="text-center text-gray-600 text-lg">No books available</p>
			)}
			<div className="mb-8 mt-10">
				<AddBlockchainBooks addBook={AddBlockchainBooks} />
			</div>
		</div>
	);
}
