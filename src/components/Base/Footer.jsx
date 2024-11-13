import { FiFacebook, FiLinkedin, FiTwitter, FiYoutube, FiInstagram } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AppStore from '../../assets/base/appstore.png'
import PlayStore from '../../assets/base/playstore.png'
import Contact from '../Services/Contact'

function Footer({ childContact }) {
    return (
        <footer className="p-8 text-center text-sm md:text-base">
            <hr className='m-4'/>
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-black">

                {/* Coursera Column */}
                <div className="text-left">
                    <h2 className="font-semibold text-lg mb-4">Coursera</h2>
                    <ul className="space-y-2 text-gray-600">
                        <li><Link to="/about" className='hover:font-bold'>About</Link></li>
                        <li><Link to="/offerings" className='hover:font-bold'>What We Offer</Link></li>
                        <li><Link to="/leadership" className='hover:font-bold'>Leadership</Link></li>
                        <li><Link to="/careers" className='hover:font-bold'>Careers</Link></li>
                        <li><Link to="/catalog" className='hover:font-bold'>Catalog</Link></li>
                        <li><Link to="/coursera-plus" className='hover:font-bold'>Coursera Plus</Link></li>
                        <li><Link to="/professional-certificates" className='hover:font-bold'>Professional Certificates</Link></li>
                        <li><Link to="/mastertrack-certificates" className='hover:font-bold'>MasterTrack® Certificates</Link></li>
                        <li><Link to="/degrees" className='hover:font-bold'>Degrees</Link></li>
                        <li><Link to="/enterprise" className='hover:font-bold'>For Enterprise</Link></li>
                        <li><Link to="/government" className='hover:font-bold'>For Government</Link></li>
                        <li><Link to="/campus" className='hover:font-bold'>For Campus</Link></li>
                        <li><Link to="/partner" className='hover:font-bold'>Become a Partner</Link></li>
                        <li><Link to="/social-impact" className='hover:font-bold'>Social Impact</Link></li>
                    </ul>
                </div>

                {/* Community Column */}
                <div className="text-left">
                    <h2 className="font-semibold text-lg mb-4">Community</h2>
                    <ul className="space-y-2 text-gray-600">
                        <li><Link to="/learners" className='hover:font-bold'>Learners</Link></li>
                        <li><Link to="/partners" className='hover:font-bold'>Partners</Link></li>
                        <li><Link to="/beta-testers" className='hover:font-bold'>Beta Testers</Link></li>
                        <li><Link to="/blog" className='hover:font-bold'>Blog</Link></li>
                        <li><Link to="/coursera-podcast" className='hover:font-bold'>The Coursera Podcast</Link></li>
                        <li><Link to="/tech-blog" className='hover:font-bold'>Tech Blog</Link></li>
                        <li><Link to="/teaching-center" className='hover:font-bold'>Teaching Center</Link></li>
                    </ul>
                </div>

                {/* More Column */}
                <div className="text-left col-span-2 sm:col-span-1">
                    <h2 className="font-semibold text-lg mb-4">More</h2>
                    <ul className="space-y-2 text-gray-600">
                        <li><Link to="/press" className='hover:font-bold'>Press</Link></li>
                        <li><Link to="/investors" className='hover:font-bold'>Investors</Link></li>
                        <li><Link to="/terms" className='hover:font-bold'>Terms</Link></li>
                        <li><Link to="/privacy" className='hover:font-bold'>Privacy</Link></li>
                        <li><Link to="/help" className='hover:font-bold'>Help</Link></li>
                        <li><Link to="/accessibility" className='hover:font-bold'>Accessibility</Link></li>
                        <li><Link to={childContact} className='hover:font-bold'>Contact</Link></li>
                        <li><Link to="/articles" className='hover:font-bold'>Articles</Link></li>
                        <li><Link to="/directory" className='hover:font-bold'>Directory</Link></li>
                        <li><Link to="/affiliates" className='hover:font-bold'>Affiliates</Link></li>
                        <li><Link to="/modern-slavery-statement" className='hover:font-bold'>Modern Slavery Statement</Link></li>
                        <li><Link to="/cookie-preferences" className='hover:font-bold'>Manage Cookie Preferences</Link></li>
                    </ul>
                </div>

                {/* Mobile App Column */}
                <div className="mb-8 col-span-2 text-center sm:col-span-2 md:col-span-1 mx-auto">
                    <h2 className="font-semibold text-lg mb-4">Mobile App</h2>
                    <ul className="flex md:flex-col gap-5">
                        <li><a href="https://apps.apple.com/us/app/coursera-grow-your-career/id736535961" target='_blank'><img src={AppStore} alt="" className='rounded-lg h-auto w-48'/></a></li>
                        <li><a href="https://play.google.com/store/apps/details?id=org.coursera.android&hl=en" target='_blank'><img src={PlayStore} alt="" className='rounded-lg h-auto w-48'/></a></li>
                    </ul>
                </div>
            </div>

            {/* Follow Us Section */}
            <div className="text-center mb-4">
                <h2 className="font-semibold text-lg mb-4">Follow Us</h2>
                <div className="flex justify-center space-x-4">
                    <a href="https://www.facebook.com/Coursera/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FiFacebook className="text-2xl hover:text-gray-700" />
                    </a>
                    <a href="https://www.linkedin.com/company/coursera/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FiLinkedin className="text-2xl hover:text-gray-700" />
                    </a>
                    <a href="https://www.linkedin.com/company/coursera/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FiTwitter className="text-2xl hover:text-gray-700" />
                    </a>
                    <a href="https://www.youtube.com/user/coursera" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <FiYoutube className="text-2xl hover:text-gray-700" />
                    </a>
                    <a href="https://www.instagram.com/coursera/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FiInstagram className="text-2xl hover:text-gray-700" />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-center mt-4 text-xs md:text-sm">&copy; 2024 Coursera Inc. All rights reserved.</p>
        </footer>
    );
}

export default Footer;