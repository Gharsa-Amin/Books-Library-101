import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<section>
				<div className="flex justify-center ">
					<h2 className="p-8 text-5xl text-[#e85f8d] font-bold italic">
						Quantum is for Everyone
					</h2>
					<h2 className="p-8 text-5xl text-[#e85f8d] font-bold italic">
						Blockchain is for Everyone
					</h2>
				</div>
				<div className="flex justify-center">
					<div className="w-50">
						<img src="./Hero-Quantum-Blocks.png" />
					</div>
					<p>
						Let's make quantum decentralized and let's blockchain secure, beyond
						just the 0s, and 1s. The goal behind this website is to start
						creating paths for quantum and blockchain to work together.
					</p>
				</div>
				<div>
					<h2>Keey The Story Going....</h2>
					<p>
						Continue reading the books and immerse yourself in the world of
						blockchain and quantum!
					</p>
				</div>
				<Link to="/QuantumBooks">
					<h2>Quantum Books</h2>
				</Link>
				<Link to="/BlockchainBooks">
					<h2>Blockchain Books</h2>
				</Link>
			</section>
		</>
	);
}
