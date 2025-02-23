import React, { useState } from "react";

export default function AddBook({ addBook }) {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");

	const handleAddBook = (e) => {
		e.preventDefault();
		if (!title || !author) return;

		const newBook = {
			id: Date.now(),
			title,
			author,
		};

		addBook(newBook);
		setTitle("");
		setAuthor("");
	};

	return (
		<form onSubmit={handleAddBook}>
			<div>
				<label>
					Title:
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</label>
			</div>
			<div>
				<label>
					Author:
					<input
						type="text"
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
					/>
				</label>
			</div>
			<button type="submit">Add Book</button>
		</form>
	);
}
