import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<img src="./Hero-Quantum-Blocks.png" />
			<Link to="/QuantumBooks">
				<h2>Quantum Books</h2>
			</Link>
			<Link to="/BlockchainBooks">
				<h2>Blockchain Books</h2>
			</Link>
		</>
	);
}
