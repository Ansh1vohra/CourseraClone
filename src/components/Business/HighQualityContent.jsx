import React from "react";
import logos from "../../assets/business/logos.png";

const HighQualityContent = () => {
	return (
		<div className="flex flex-col-reverse gap-5 md:flex-row items-center justify-between md:items-start bg-white py-8 space-y-8 md:space-y-0 md:space-x-16 px-5 lg:px-16 xl:px-28">
			{/* Image Section */}
			<div className="w-full md:w-1/2 flex">
				<img src={logos} alt="Partner Logos" className="max-w-full h-auto object-contain" />
			</div>

			{/* Text Content Section */}
			<div className="w-full md:w-1/2 space-y-4">
				<h2 className="text-gray-700 text-sm font-semibold uppercase">
					High-Quality Content
				</h2>
				<h1 className="text-gray-700 text-4xl font-bold">
					Learning from the best
				</h1>
				<p className="text-gray-800 text-lg">
					Save on training costs with tailored content and industry-recognized
					<br></br>
					credentials from over 325 leading companies and universities.
				</p>
				<ul className="space-y-2 font-sm">
					<li className="text-gray-900">
						<span className="text-blue-600 font-semibold">✓</span> Learn
						directly from more than 20 top business schools
					</li>
					<li className="text-gray-900">
						<span className="text-blue-600 font-semibold">✓</span> Use curated
						academies for specific jobs or upskilling needs
					</li>
					<li className="text-gray-900">
						<span className="text-blue-600 font-semibold">✓</span> Balance
						workplace skills and technical skills training
					</li>
					<li className="text-gray-900">
						<span className="text-blue-600 font-semibold">✓</span> Offer
						learning in diverse formats, from video clips to guided projects and
						<br></br>Professional Certificates
					</li>
					<br></br>
					<br></br>
				</ul>
				<a href="#" className="text-blue-600 font-semibold">
					Explore world-class content →
				</a>
			</div>
		</div>
	);
};

export default HighQualityContent;
