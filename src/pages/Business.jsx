import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import girl from "../assets/business/girl.png";
import hubspotLogo from "../assets/business/hubspotLogo.png";
import sapLogo from "../assets/business/sap.png";
import ibmLogo from "../assets/business/ibm.png";
import nvidiaLogo from "../assets/business/nvidia.png";
import ciscoLogo from "../assets/business/cisco.png";
import toshibaLogo from "../assets/business/toshiba.png";
import SkillBuildingSection from "../components/Business/SkillBuildingSection";
import HighQualityContent from "../components/Business/HighQualityContent";
import SearchCatalog from "../components/Business/SearchCatalog";
import Programs from "../components/Business/programs";
import TrainingProgramsPage from "../components/Business/TrainingProgramsPage";
import EmployeeEngagement from "../components/Business/EmployeeEngagement";
import LeadYourCompany from "../components/Business/LeadYourCompany";
import InfoSection from "../components/Business/InfoSection";
import { Body, Divider, Head, Stat, Stats } from "../components/UI/Stats";

const CompanyLogos = () => (
	<div className="max-w-5xl mx-auto mt-48 mb-20 sm:my-32 px-4 sm:px-6 lg:px-12 flex flex-wrap items-center">
		<div className="flex-1 mb-6 sm:mb-0">
			<div className="grid grid-cols-3 gap-6 items-center justify-items-center">
				<img src={hubspotLogo} alt="HubSpot" className="h-16 w-auto" />
				<img src={sapLogo} alt="SAP" className="h-16 w-auto" />
				<img src={ibmLogo} alt="IBM" className="h-16 w-auto" />
				<img src={nvidiaLogo} alt="NVIDIA" className="h-16 w-auto" />
				<img src={ciscoLogo} alt="Cisco" className="h-16 w-auto" />
				<img src={toshibaLogo} alt="Toshiba" className="h-16 w-auto" />
			</div>
		</div>
		<div className="flex-1 text-center sm:text-left pl-0 sm:pl-12">
			<h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
				Join over 3,700 companies using Coursera to develop talent
			</h2>
		</div>
	</div>
);

const Business = () => {
	return (
		<div className="font-sans">
			{/* Main Image Section */}
			<div className="relative flex flex-col sm:flex-row items-center bg-blue-50 pt-12 py-24 px-5 lg:px-16 xl:px-28">
				<div className="flex-1 text-center sm:text-left">
					<h1 className="text-3xl sm:text-7xl font-semibold font-sans text-gray-800 mb-14">
						Empower your talent
						<br />
						to drive your business forward
					</h1>
					<ul className="pl-5 text-lg text-black space-y-2">
						<li className="flex items-center">
							<FaCheck className="text-blue-700 mr-2" />
							Train teams with respected industry experts and top universities
						</li>
						<li className="flex items-center">
							<FaCheck className="text-blue-700 mr-2" />
							Enrich learning solutions with tailored paths and AI tools
						</li>
						<li className="flex items-center">
							<FaCheck className="text-blue-700 mr-2" />
							Boost employee engagement with globally recognized credentials
						</li>
						<li className="flex items-center">
							<FaCheck className="text-blue-700 mr-2" />
							Customize scalable learning solutions efficiently
						</li>
					</ul>
					<button className="bg-blue-600 text-white mt-8 px-8 py-4 font-semibold rounded w-40">
						Contact us
					</button>
					<p className="mt-4 text-gray-600">
						Upskilling fewer than 125 employees?{" "}
						<a href="#" className="text-blue-600 underline">
							Get Coursera for Teams
						</a>
					</p>
				</div>
				<div className="flex-1 h-full flex justify-center">
					<img
						src={girl}
						alt="Empower your talent"
						className="sm:h-screen object-cover"
					/>
				</div>

				<Stats className="absolute bottom-0 translate-y-1/2">
					<Stat className="border-b sm:border-b-0">
						<Head>24%</Head>
						<Body>Reduction in training costs</Body>
					</Stat>
					<Stat className="border-b sm:border-b-0">
						<Head>38%</Head>
						<Body>Higher retention rates</Body>
					</Stat>
					<Stat>
						<Head>25%</Head>
						<Body>Improvement in performance</Body>
					</Stat>
				</Stats>
			</div>

			{/* Company Logos Section */}
			<CompanyLogos />

			<SkillBuildingSection />
			<HighQualityContent />
			<SearchCatalog />
			<Programs />
			<TrainingProgramsPage />
			<EmployeeEngagement />
			<LeadYourCompany />
			<InfoSection />
		</div>
	);
};

export default Business;
