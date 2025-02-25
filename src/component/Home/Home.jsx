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
					<div className="sm:w-1/2 md:-rotate-45">
						<img src="./Hero-Quantum-Blocks.png" />
					</div>
					<p className="content-right w-60 ">
						Let's make quantum decentralized and let's blockchain secure, beyond
						just the 0s, and 1s. The goal behind this website is to start
						creating paths for quantum and blockchain to work together.
					</p>
				</div>
				<div>
					<h2 className="pt-44 text-3xl text-[#0f334d]">
						Keep The Story Going....
					</h2>
					<div className="flex justify-center pt-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
							/>
						</svg>
					</div>
				</div>
				<p className="flex justify-center italic pt-6">
					Continue reading the books and immerse yourself in the world of x and
					x!
				</p>

				<div className="flex flex-col items-center sm:flex-row sm:justify-evenly pt-16">
					<Link to="/BlockchainBooks" className="flex flex-col items-center">
						<button className="text-lg font-semibold">Blockchain Books</button>
						<div className="flex justify-center mt-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="h-6 w-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
								/>
							</svg>
						</div>
					</Link>
					<Link to="/QuantumBooks" className="flex flex-col items-center">
						<button className="text-lg font-semibold">Qunatum Books</button>
						<div className="flex justify-center mt-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="h-6 w-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
								/>
							</svg>
						</div>
					</Link>
				</div>

				{/* Book Image */}
				<div className="flex justify-center pt-8 px-4 sm:px-8">
					<img
						className="w-full max-w-2xl h-auto"
						src="./Books.png"
						alt="Books"
					/>
				</div>

				{/* Profile Section */}
				<div className="pt-8 sm:pt-16">
					<div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-center p-6">
						<img
							className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
							src="./Headshot.jpg"
							alt="Gharsa Amin"
						/>
						<div className="space-y-2 text-center sm:text-left">
							<div className="space-y-0.5">
								<p className="text-lg font-semibold text-black">Gharsa Amin</p>
								<p className="font-medium text-gray-500">Software Engineer</p>
							</div>
							<a
								href="/gharsa-amin _2025.pdf"
								className="text-inherit"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="border border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 px-4 py-2 rounded-md">
									Resume
								</button>
							</a>
						</div>
					</div>

					<p className="flex justify-center mt-6">
						I built this Library, if you would like to collaborate, or chat!
						Send me an email.
					</p>
				</div>

				{/* <p className=" flex justify-center w-20 md:rotate-45 pt-30 animate-rotate-around ">
					Continue reading the books and immerse yourself in the world of
					blockchain and quantum!
				</p> */}
			</section>
		</>
	);
}
