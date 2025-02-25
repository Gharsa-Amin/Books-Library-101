import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<section>
				<div className="flex justify-center flex-col sm:flex-row items-center">
					<h2 className="p-8 text-4xl sm:text-5xl text-[#e85f8d] font-bold italic skew-3">
						Quantum is for Everyone
					</h2>
					<h2 className="p-8 text-4xl sm:text-5xl text-[#e85f8d] font-bold italic skew-3">
						Blockchain is for Everyone
					</h2>
				</div>
				<div className="pt-20 sm:pt-40 flex flex-col sm:flex-row justify-evenly items-center">
					<div className="sm:w-1/2 -rotate-45">
						<img src="./Hero-Quantum-Blocks.png" />
					</div>
					<p className="content-right md:rotate-45 pt-30">
						Let's make quantum decentralized and let's blockchain secure, beyond
						just the 0s, and 1s. The goal behind this website is to start
						creating paths for quantum and blockchain to work together.
					</p>
				</div>
				<div>
					<h2>Keep The Story Going....</h2>
					<p>
						Continue reading the books and immerse yourself in the world of
						blockchain and quantum!
					</p>
					<button>Start Reading</button>
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
