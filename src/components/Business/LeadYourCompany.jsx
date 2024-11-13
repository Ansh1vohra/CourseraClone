import React from "react";
import capegemini from "../../assets/business/capegemini.png";
import emirates from "../../assets/business/emirates.png";
import reliance from "../../assets/business/reliance.png";
import pg from "../../assets/business/p&g.png";
import petro from "../../assets/business/petro.png";
import tata from "../../assets/business/tata.png";
import wetzeImage from "../../assets/business/wetz.png";

function LeadYourCompany() {
	return (
		<div className="bg-blue-50 min-h-screen flex justify-center items-center py-12 px-5 lg:px-16 xl:px-28">
			<div className="flex flex-col justify-between lg:flex-row items-start lg:space-x-12 max-w-fit w-full">
				{/* Left Section */}
				<div className="w-full lg:w-1/2 space-y-6">
					<h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
						Ready to lead your company through change?
					</h1>
					<p className="text-xl text-gray-800 text-medium">
						Let’s connect to discuss how Coursera can help you:
					</p>
					<ul className="space-y-2 text-gray-900">
						<li>
							<span className="text-blue-600">✓</span> Accelerate your digital
							transformation
						</li>
						<li>
							<span className="text-blue-600">✓</span> Improve your company's
							agility
						</li>
						<li>
							<span className="text-blue-600">✓</span> Boost employee
							productivity and innovation
						</li>
						<li>
							<span className="text-blue-600">✓</span> Equip employees to drive
							growth
						</li>
					</ul>

					<h2 className="text-3xl font-semibold text-gray-900 mt-6">
						Top companies develop skills with Coursera
					</h2>

					{/* Companies Logos in 3x3 Grid, Aligned Left */}
					<div className="flex justify-start mt-4">
						<div className="grid grid-cols-3 gap-4">
							<img
								src={capegemini}
								alt="Capgemini"
								className="w-20 h-20 object-contain"
							/>
							<img
								src={emirates}
								alt="Emirates NBD"
								className="w-20 h-20 object-contain"
							/>
							<img
								src={reliance}
								alt="Reliance"
								className="w-20 h-20 object-contain"
							/>
							<img src={pg} alt="P&G" className="w-20 h-20 object-contain" />
							<img
								src={petro}
								alt="Petrobras"
								className="w-20 h-20 object-contain"
							/>
							<img src={tata} alt="Tata" className="w-20 h-20 object-contain" />
						</div>
					</div>

					{/* Quote */}
					<blockquote className="mt-6 text-gray-900 text-2xl">
						“With Coursera, we’ve cultivated a well-rounded, competitive
						technical workforce that is passionate about professional
						development.”
					</blockquote>
					<div className="flex items-center mt-2">
						<img src={wetzeImage} alt="G. Wetze" className="w-20 mr-6" />
						<div>
							<p className="text-black font-semibold">G. Wetze</p>
							<p className="text-black">VP of Data and Analytics, Equifax</p>
						</div>
					</div>
					<br />
				</div>

				{/* Right Section (Form) */}
				<div className="w-full lg:w-1/2 bg-white p-8 border-gray-700 shadow-lg space-y-4 mt-8 lg:mt-0">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<input
							type="text"
							placeholder="First Name"
							className="border-2 border-gray-500 p-3 rounded-md bg-white placeholder-gray-500"
						/>
						<input
							type="text"
							placeholder="Last Name"
							className="border-2 border-gray-500 p-3 rounded-md bg-white placeholder-gray-500"
						/>
					</div>
					<br />
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<input
							type="email"
							placeholder="Work Email Address"
							className="border-2 border-gray-500 p-3 rounded-md bg-white placeholder-gray-500"
						/>
						<input
							type="tel"
							placeholder="Phone Number"
							className="border-2 border-gray-500 p-3 rounded-md bg-white placeholder-gray-500"
						/>
					</div>
					<br />
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<input
							type="text"
							placeholder="Job Title"
							className="border-2 border-gray-500 p-3 rounded-md bg-white placeholder-gray-500"
						/>
						<input
							type="text"
							placeholder="Expected number of learners"
							className="border-2 border-gray-500 p-3 rounded-md bg-white placeholder-gray-500"
						/>
					</div>
					<br />
					<div className="flex items-center">
						<input type="checkbox" id="government-agency" className="mr-2" />
						<label htmlFor="government-agency" className="text-black">
							Do you work for a government or nonprofit agency?
						</label>
					</div>
					<br />
					<input
						type="text"
						placeholder="Country"
						className="border-2 border-gray-700 p-3 rounded-md w-full bg-white placeholder-gray-500"
					/>
					<br />
					<input
						type="text"
						placeholder="Which best describes your needs?"
						className="border-2 border-gray-700 p-3 rounded-md w-full bg-white placeholder-gray-500"
					/>
					<br />

					<p className="text-xs text-gray-900 mt-4">
						By submitting your info in the form above, you agree to our{" "}
						<a href="#" className="text-blue-600 underline">
							Terms of Use
						</a>{" "}
						and{" "}
						<a href="#" className="text-blue-600 underline">
							Privacy Notice
						</a>
						. We may use this info to contact you and/or use data from third
						parties to personalize your experience.
					</p>
					<br />
					<button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-800">
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}

export default LeadYourCompany;
