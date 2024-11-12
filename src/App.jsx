import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./utils/ScrollToTop";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import MyLearning from "./pages/MyLearning";
import Course from "./pages/Course";
import Contact from "./components/Services/Contact";
import NotFoundError from "./pages/errors/NotFoundError";
import PageLayout from "./PageLayout";
import Search from "./pages/Search";
import Business from "./pages/business";
import University from "./pages/University";
import Profile from "./pages/Profile";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<div className="mx-auto flex flex-col min-h-screen bg-white">
				<Routes>
					<Route element={<PageLayout />}>
						<Route path="/" element={<Home />} />
						<Route path="/my-learning" element={<MyLearning />} />
						<Route path="/business" element={<Business />} />
						<Route path="/campus" element={<University />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/search" element={<Search />} />
						<Route path="/courses" element={<Courses />} />
						<Route path="courses/:id" element={<Course />} />
						<Route path="/profile" element={<Profile />} />
					</Route>
					<Route path="*" element={<NotFoundError />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
