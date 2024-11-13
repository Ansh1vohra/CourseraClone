import React, { useState } from "react";
import courseraLogo from "../../assets/business/courseraforbusiness.png";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useScrollDirection } from "../../hooks/useScrollDirection";

const NavBusiness = () => {
	const direction = useScrollDirection();
	const [dropdownOpen, setDropdownOpen] = useState(null);

	const handleDropdown = (menu) => {
		setDropdownOpen(dropdownOpen === menu ? null : menu);
	};

	return (
		<nav
			className={`${
				direction === "down" ? "top-0" : "top-0 lg:top-9"
			} sticky bg-white z-20 flex items-center text-gray-500 transition-all duration-300 drop-shadow border-b border-gray-300 px-5 py-5 lg:px-16 xl:px-28 flex-wrap`}
		>
			<img
				src={courseraLogo}
				alt="Coursera for Business"
				className="h-5 sm:h-6 flex-shrink-0 mr-4"
			/>

			{/* Navbar links section */}
			<div className="flex flex-grow justify-center flex-wrap items-center space-x-4 sm:space-x-6">
				<div className="relative">
					<button
						onClick={() => handleDropdown("whyCoursera")}
						className="flex items-center hover:text-blue-600"
					>
						Why Coursera{" "}
						{dropdownOpen === "whyCoursera" ? (
							<AiOutlineUp className="h-3 w-4 text-gray-600 ml-1" />
						) : (
							<AiOutlineDown className="h-3 w-4 text-gray-600 ml-1" />
						)}
					</button>
					{dropdownOpen === "whyCoursera" && (
						<div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-48 left-0">
							<a
								href="#"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							>
								Our Mission
							</a>
							<a
								href="#"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							>
								Success Stories
							</a>
							<a
								href="#"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							>
								Leadership
							</a>
						</div>
					)}
				</div>

				<div className="relative">
					<button
						onClick={() => handleDropdown("solutions")}
						className="flex items-center hover:text-blue-600"
					>
						Solutions{" "}
						{dropdownOpen === "solutions" ? (
							<AiOutlineUp className="h-3 w-4 text-gray-600 ml-1" />
						) : (
							<AiOutlineDown className="h-3 w-4 text-gray-600 ml-1" />
						)}
					</button>
					{dropdownOpen === "solutions" && (
						<div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-48">
							<a
								href="#"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							>
								For Corporates
							</a>
							<a
								href="#"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							>
								For Governments
							</a>
							<a
								href="#"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							>
								For Education
							</a>
						</div>
					)}
				</div>

				<div className="relative">
					<button
						onClick={() => handleDropdown("resources")}
						className="flex items-center hover:text-blue-600"
					>
						Resources{" "}
						{dropdownOpen === "resources" ? (
							<AiOutlineUp className="h-3 w-4 text-gray-600 ml-1" />
						) : (
							<AiOutlineDown className="h-3 w-4 text-gray-600 ml-1" />
						)}
					</button>
					{dropdownOpen === "resources" && (
						<div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-48">
							<a
								href="#"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							>
								Case Studies
							</a>
							<a
								href="#"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							>
								Webinars
							</a>
							<a
								href="#"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							>
								Reports
							</a>
						</div>
					)}
				</div>

				<a href="#" className="hover:text-blue-600">
					For Teams
				</a>
				<a href="#" className="hover:text-blue-600">
					Compare Plans
				</a>
			</div>

			{/* Contact Sales Button */}
			<button className="bg-blue-700 text-white px-4 py-2 rounded text-lg font-semibold mt-4 lg:mt-0">
				Contact Sales
			</button>
		</nav>
	);
};

export default NavBusiness;
