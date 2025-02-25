import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<p>Quantum is for Everyone</p>
			<p>Blockchain is for Everyone</p>
			<p>
				Let's make quantum decentralized and let's blockchain secure, beyond
				just the 0s, and 1s.
			</p>
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
