import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import user1 from "../../assets/home/testimonial/user1.png"
import user2 from "../../assets/home/testimonial/user2.png"
import user3 from "../../assets/home/testimonial/user3.png"

const Testimonial = () => {
	return (
		<>
			<div className="text-center py-12">
				<h2 className="text-3xl text-neutral font-medium text-black-800">From The Coursera Community</h2>
				<p className="text-2xl text-gray-700 mt-2">
					70+ Million People Are Already Learning On Coursera
				</p>
			</div>

			{/* Testimonials Section with Chevron Arrows */}
			<div className="flex flex-col items-center mb-10 px-4 md:px-0">
				<div className="flex items-center space-x-2 sm:space-x-6 justify-center">
					{/* Left Chevron */}
					<button className="p-2">
						<FiChevronLeft className="text-blue-500 w-8 h-8 sm:w-10 sm:h-10" />
					</button>

					{/* Testimonials */}
					<div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-20">
						<div className="flex flex-col items-center w-full sm:w-60 p-4 text-center">
							<img
								src={user1}
								alt="User 1"
								className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-gray-300"
							/>
							<h3 className="mt-4 text-blue-700 font-medium">Julio R.</h3>
							<p className="text-sm font-bold text-gray-700">Web Developer</p>
							<p className="text-sm text-gray-600 font-medium border-b-2 border-blue-600 h-10">
								Chile
							</p>
							<p className="text-sm mt-3 font-calibri">
								"I started at zero with Coursera. I was able to start learning
								online and eventually build up enough knowledge and skills to
								transition into a well-paying career."
							</p>
						</div>

						<div className="flex flex-col items-center w-full sm:w-60 p-4 text-center">
							<img
								src={user2}
								alt="User 2"
								className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-gray-300"
							/>
							<h3 className="mt-4 text-blue-700 font-medium">Kara A.</h3>
							<p className="text-sm text-gray-700 font-calibri font-bold">
								IMBA Graduate, University Of Illinois Gies College Of Business
							</p>
							<p className="text-sm text-gray-600 font-calibri font-medium border-b-2 border-blue-600 h-10">
								United States
							</p>
							<p className="text-sm font-calibri mt-3">
								"It’s a really big deal to offer an online MBA that’s a real MBA
								at a price that's achievable. This program is totally disrupting
								higher education."
							</p>
						</div>

						<div className="flex flex-col items-center w-full sm:w-60 p-4 text-center">
							<img
								src={user3}
								alt="User 3"
								className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-gray-300"
							/>
							<h3 className="mt-4 text-blue-700 font-medium">Mirela I.</h3>
							<p className="text-sm text-gray-700 font-calibri font-bold">
								IBM Data Science Professional Certification Alumna
							</p>
							<p className="text-sm text-gray-600 font-medium font-calibri border-b-2 border-blue-600 h-10">
								Romania
							</p>
							<p className="text-sm mt-3 font-calibri">
								"Recruiters saw my Professional Certificate on my LinkedIn
								profile. During the interview, they told me they were impressed
								with the skills I learned. I got the job!"
							</p>
						</div>
					</div>

					{/* Right Chevron */}
					<button className="p-2">
						<FiChevronRight className="text-blue-500 w-8 h-8 sm:w-10 sm:h-10" />
					</button>
				</div>

				<div className="flex mt-6 space-x-2">
					<span className="w-2 h-2 rounded-full bg-gray-300"></span>
					<span className="w-2 h-2 rounded-full bg-blue-600"></span>
					<span className="w-2 h-2 rounded-full bg-gray-300"></span>
				</div>
			</div>
		</>
	);
};

export default Testimonial;
