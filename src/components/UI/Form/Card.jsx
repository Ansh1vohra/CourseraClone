/* eslint-disable react/prop-types */
import Image from '../../assets/codingteam.jpg'

function Card({ title }) {
    return (
        <div className="card card-compact shadow-lg p-6 bg-white rounded-lg transform transition-transform duration-200 ease-out hover:scale-105 hover:shadow-2xl">
            <img src={Image} alt="image" className="mb-4 w-96"/>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">{title}</h2>
            <span className="text-gray-600 text-sm mb-1 block">Build toward a degree</span>
            <span className="text-indigo-600 text-sm font-medium">Professional Certificate</span>
        </div>
    );
}

export default Card;