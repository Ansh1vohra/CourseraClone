import React from "react";
import promoteImg from "../../assets/home/promote/promote.png"

const Promote = () => {
	return (
		<div className="bg-blue-50 my-16 py-8 px-6 mx-auto">
			<div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center">
				{/* Image Section */}
				<div className="hidden lg:absolute left-0 lg:flex justify-center items-start lg:w-1/2 mb-8 lg:mb-0">
					{" "}
					{/* Center image on small screens */}
					<img
						src={promoteImg}
						alt="Hero"
						className="w-fit p-16 h-auto max-w-xs lg:max-w-full"
					/>{" "}
					{/* Responsive image */}
				</div>

				{/* Text Section */}
				<div className="lg:w-1/2 space-y-4 text-center lg:text-left lg:ml-8 md:ml-6 sm:ml-4">
					<h1 className="text-3xl lg:text-4xl text-neutral font-calibri mb-4">
						{" "}
						{/* Reduced boldness */}
						Learner Outcomes On Coursera
					</h1>
					<p className="text-lg">
						<span className="text-black font-semibold font-calibri">
							87% of people learning
						</span>
						<span className="text-lg text-gray-600 font-calibri">
							{" "}
							for professional development<br></br>
						</span>
						<span className="font-semibold text-gray-700 font-calibri">
							{" "}
							report career benefits
						</span>
						<span className="text-gray-600 font-calibri">
							{" "}
							like getting a promotion, a <br></br>raise, or starting a new
							career.
						</span>
						<br />
						<br />
						<br></br>
						<span className="text-lg text-gray-500 font-calibri">
							{" "}
							- coursera learner Outcomes survey(2019)
						</span>
					</p>
					<div className="space-x-4">
						<button className="px-4 py-2 bg-blue-600 text-white font-calibri font-bold">
							Join for Free
						</button>{" "}
						{/* Bold button */}
						<button className="px-4 py-2 border bg-white border-blue-600 text-blue-600 font-calibri  font-semibold">
							Try Coursera for Business
						</button>{" "}
						{/* Made bolder */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Promote;
