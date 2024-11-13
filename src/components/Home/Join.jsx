import { NavLink } from "react-router-dom";
import NextStep from "../../assets/home/join/nextstep.png"
import BulkLogo from "../../assets/home/join/bulklogo.png";
import Button from "../UI/Button";

const Join = () => {
	return (
		<>
			{/* Join Section */}
			<div className="container flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-12 sm:gap-16 lg:gap-20 px-4 sm:px-6 lg:px-16 xl:px-28 py-16 sm:py-20 lg:py-28 bg-yellow-50">
				<div className="w-full lg:w-1/2 flex mb-6 sm:mb-8 lg:mb-0">
					<img
						src={NextStep}
						alt="Next Step Image"
						className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none h-auto lg:max-h-96 rounded-lg object-cover"
					/>
				</div>
				<div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
					<h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 lg:mb-6 text-black">
						Take the next step toward your personal and professional goals with Coursera.
					</h2>
					<p className="text-sm sm:text-md md:text-lg mb-4 sm:mb-6 lg:mb-8 text-gray-800">
						Join now to receive personalized recommendations from the full Coursera catalog.
					</p>
					<NavLink to="/home">
						<Button variant="primary" className="px-6 sm:px-8">
							Join for Free
						</Button>
					</NavLink>
				</div>
			</div>

			{/* Coursera for Business Section */}
			<div className="container flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-12 sm:gap-16 lg:gap-20 px-4 sm:px-6 lg:px-16 xl:px-28 py-16 sm:py-20 lg:py-28">
				{/* Text Content */}
				<div className="w-full lg:w-1/2 mb-6 sm:mb-8 lg:mb-0">
					<h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 lg:mb-6 text-black">
						Coursera for Business
					</h2>
					<p className="text-sm sm:text-md md:text-lg mb-4 sm:mb-6 lg:mb-8 text-gray-800">
						We&apos;ve got the solution: world-class training and development programs developed by top universities and companies. All on Coursera for Business.
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<Button variant="primary" className="px-6 sm:px-8">
							Coursera For Enterprise
						</Button>
						<Button variant="primary" type="outlined" className="px-6 sm:px-8">
							Coursera For Teams
						</Button>
					</div>
				</div>
				{/* Image */}
				<div className="w-full lg:w-auto flex justify-center">
					<img
						src={BulkLogo}
						alt="Coursera for Business Logo"
						className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none h-auto lg:max-h-64 rounded-lg object-cover"
					/>
				</div>
			</div>
		</>
	);
};

export default Join;
