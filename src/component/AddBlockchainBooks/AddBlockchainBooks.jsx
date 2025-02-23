import React, { useState } from "react";

export default function AddBlockchainBooks({ addBlockchainBook }) {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");

	const handleAddBlockchainBooks = (e) => {
		e.preventDefault();
		if (!title || !author) return;

		const newBlockchainBook = {
			id: Date.now(),
			title,
			author,
		};

		addBlockchainBook(newBlockchainBook);
		setTitle("");
		setAuthor("");
	};

	return (
		<form onSubmit={handleAddBlockchainBooks}>
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
