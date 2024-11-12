import React, { useState } from 'react';
import Modal from '../components/UI/Modal';
import { FaPencilAlt, FaCopy } from 'react-icons/fa';

export default function Profile() {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [modalTitle, setModalTitle] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (title, content) => {
        setModalTitle(title);
        setModalContent(content);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedImage(null); // Reset image preview when modal is closed
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
        closeModal();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file)); // Show preview of selected image
        }
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(profileLink);
        alert("Link copied to clipboard!");
    };

    const profileLink = "https://example.com/user-profile";

    // Forms for different sections
    const projectForm = (
        <form onSubmit={handleFormSubmit} className="space-y-4">
            <label>Describe your key findings, recommendations, and process for this project. This information will be visible to anyone who views this project from your profile.</label>
            <input type="text" placeholder="Project Title" className="w-full border p-2 rounded" required />
            <textarea placeholder="Project Description" className="w-full border p-2 rounded" rows="4" required></textarea>
            <input type="url" placeholder="Project Link" className="w-full border p-2 rounded" />
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Save Project</button>
        </form>
    );

    const workHistoryForm = (
        <form onSubmit={handleFormSubmit} className="space-y-4">
            <label>Add your past work experience. If you're just starting out, you can add internships or volunteer experience instead.</label>
            <input type="text" placeholder="Job Title" className="w-full border p-2 rounded" required />
            <input type="text" placeholder="Company Name" className="w-full border p-2 rounded" required />
            <input type="text" placeholder="Location" className="w-full border p-2 rounded" />
            <input type="date" placeholder="Start Date" className="w-full border p-2 rounded" />
            <input type="date" placeholder="End Date" className="w-full border p-2 rounded" />
            <textarea placeholder="Job Description" className="w-full border p-2 rounded" rows="4"></textarea>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Save Work History</button>
        </form>
    );

    const educationForm = (
        <form onSubmit={handleFormSubmit} className="space-y-4">
            <label>Add your educational background to let employers know where you studied or are currently studying. Even if you didn’t finish, it’s important to include it here. And if you’ve earned a college degree, you don’t need to add your high school/GED. All fields are optional.</label>
            <input type="text" placeholder="Degree" className="w-full border p-2 rounded" required />
            <input type="text" placeholder="School/University" className="w-full border p-2 rounded" required />
            <input type="text" placeholder="Location" className="w-full border p-2 rounded" />
            <div>
                <label className='mt-4 p-2'>Start Date :</label>
                <input type="date" placeholder="Start Date" className="w-full border p-2 rounded" />
            </div>
            <div>
                <label className='p-2'>End Date :</label>
                <input type="date" placeholder="Graduation Date" className="w-full border p-2 rounded" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Save Education</button>
        </form>
    );

    const editProfileForm = (
        <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="flex flex-col items-center">
                <p>Add your personal details as you would like it to appear on your profile.</p>
                {selectedImage ? (
                    <img src={selectedImage} alt="Profile Preview" className="w-24 h-24 rounded-full mb-4" />
                ) : (
                    <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 mb-4">
                        No Image
                    </div>
                )}
                <label className="bg-blue-500 text-white p-2 rounded cursor-pointer">
                    Change Image
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                    />
                </label>
            </div>
            <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" required />
            <input type="text" placeholder="Phone Number" className="w-full border p-2 rounded" />
            <textarea placeholder="Bio/Description" className="w-full border p-2 rounded" rows="4"></textarea>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Save Profile</button>
        </form>
    );

    const workPreferenceForm = (
        <form onSubmit={handleFormSubmit} className="space-y-4">
            <label>Let recruiters know what role you're looking for to make sure you find opportunities that are right for you.</label>
            <input type="text" placeholder="Preferred Job Location" className="w-full border p-2 rounded" />
            <select className="w-full border p-2 rounded">
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Freelance</option>
                <option>Internship</option>
            </select>
            <input type="number" placeholder="Expected Salary (per year)" className="w-full border p-2 rounded" />
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Save Preferences</button>
        </form>
    );

    const additionalInfoForm = (
        <form onSubmit={handleFormSubmit} className="space-y-4">
            <textarea placeholder="Skills (comma separated)" className="w-full border p-2 rounded" rows="2"></textarea>
            <textarea placeholder="Hobbies" className="w-full border p-2 rounded" rows="2"></textarea>
            <textarea placeholder="Achievements" className="w-full border p-2 rounded" rows="4"></textarea>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Save Additional Info</button>
        </form>
    );

    const shareProfileForm = (
        <div className="space-y-4">
            <label>Only someone with a link to your profile can view it (it won’t appear as a result on search engines).</label>
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    value={profileLink}
                    readOnly
                    className="w-full border p-2 rounded bg-gray-100"
                />
                <button
                    onClick={handleCopyLink}
                    className="bg-blue-500 text-white p-2 rounded flex items-center justify-center"
                >
                    <FaCopy className="mr-1" /> Copy
                </button>
            </div>
            <p className="text-sm text-gray-600">Share this link to allow others to view your profile.</p>
        </div>
    );

     // Profile Visibility form
    const profileVisibilityForm = (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Update Profile Visibility</h3>
            <p className="text-gray-600">
                Sharing your profile is a great way to stand out by showcasing your skills and accomplishments.
            </p>
            <div className="mt-4">
                <label className="flex items-center space-x-3">
                    <input type="radio" name="visibility" value="anyone-with-link" className="form-radio text-blue-500" />
                    <span>Anyone with my link</span>
                </label>
                <p className="ml-7 text-sm text-gray-500">
                    Anyone who has the link to your profile can view it (but it won’t appear as a result on search engines).
                </p>
            </div>
            <button type="button" className="w-full bg-blue-500 text-white p-2 rounded mt-4">Save Changes</button>
        </div>
    );

    return (
        <div className="bg-[#f2f5fa] p-6 min-h-screen text-black md:px-20">
            <div className="flex flex-col md:flex-row gap-4">
                {/* Left Sidebar - Personal Details */}
                <div className="p-6 w-full md:w-1/4">
                    <div className="relative bg-white p-4 rounded flex flex-col items-center">
                        <button onClick={() => openModal('Edit Profile', editProfileForm)} className="absolute right-0 px-2"><FaPencilAlt className="text-blue-500" /></button>
                        <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
                        <img 
                            src="https://via.placeholder.com/100" 
                            alt="User Profile" 
                            className="rounded-full w-24 h-24 mb-4"
                        />
                        <span className="text-2xl font-medium">User Name</span>
                        <button onClick={() => openModal('Share Profile', shareProfileForm)} className="mt-4 px-4 py-2 border-2 border-blue-500 text-blue-700 rounded hover:bg-blue-100">
                            + Share Profile Link
                        </button>
                        <hr className="text-blue-300 bg-blue-500" />
                        <button onClick={() => openModal('Profile Visibility', profileVisibilityForm)} className="mt-2 px-4 py-2 text-blue-600 rounded hover:bg-blue-100 hover:underline">
                            Update profile visibility
                        </button>
                    </div>
                    <div className="mt-6 bg-white p-4">
                        <p>Let recruiters know what role you're looking for to make sure you find opportunities that are right for you.</p>
                        <button onClick={() => openModal('Add Work Preference', workPreferenceForm)} className="px-4 py-2 mt-6 text-blue-700 rounded border-2 border-blue-500 hover:bg-blue-100">
                            + Add work preferences
                        </button>
                    </div>
                    <div className="mt-6 bg-white p-4">
                        <p>Help recruiters get to know you better by describing what makes you a great candidate and sharing other links.</p>
                        <button onClick={() => openModal('Add Additional Info', additionalInfoForm)} className="px-4 py-2 mt-6 border-2 border-blue-500 text-blue-700 rounded hover:bg-blue-100">
                            + Add Additional Info
                        </button>
                    </div>
                </div>

                {/* Right Content - Experience & Education */}
                <div className="flex-1 p-6">
                    <h2 className="text-3xl font-semibold mb-4">Experience</h2>
                    
                    {/* Projects Section */}
                    <div className="mb-6 bg-white rounded-lg p-4 shadow-md">
                        <h3 className="text-xl font-semibold">Projects</h3>
                        <div className="flex flex-col gap-2 justify-between items-center p-4 mt-4 rounded-lg bg-gray-50 md:flex-row">
                            <p className="text-gray-600">
                                Showcase your skills to recruiters with job-relevant projects.
                            </p>
                            <button onClick={() => openModal('Add Project', projectForm)} className="px-4 py-2 bg-white text-blue-700 border border-blue-500 rounded hover:bg-blue-100">
                                + Add project
                            </button>
                        </div>
                    </div>

                    {/* Work History Section */}
                    <div className="mb-6 bg-white rounded-lg p-4 shadow-md">
                        <h3 className="text-xl font-semibold">Work History</h3>
                        <div className="flex flex-col gap-2 justify-between items-center p-4 mt-4 rounded-lg bg-gray-50 md:flex-row">
                            <p className="text-gray-600">
                                List your previous work experiences to give recruiters an idea of your background.
                            </p>
                            <button onClick={() => openModal('Add Work History', workHistoryForm)} className="px-4 py-2 bg-white text-blue-700 border border-blue-500 rounded hover:bg-blue-100">
                                + Add work history
                            </button>
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="mb-6 bg-white rounded-lg p-4 shadow-md">
                        <h3 className="text-xl font-semibold">Education</h3>
                        <div className="flex flex-col gap-2 justify-between items-center p-4 mt-4 rounded-lg bg-gray-50 md:flex-row">
                            <p className="text-gray-600">
                                Include your educational background to help recruiters understand your qualifications.
                            </p>
                            <button onClick={() => openModal('Add Education', educationForm)} className="px-4 py-2 bg-white text-blue-700 border border-blue-500 rounded hover:bg-blue-100">
                                + Add education
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Render the Modal */}
            <Modal show={showModal} onClose={closeModal} title={modalTitle}>
                {modalContent}
            </Modal>
        </div>
    );
}
