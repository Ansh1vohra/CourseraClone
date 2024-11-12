import React from 'react';

function Modal({ show, onClose, children, title }) {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg px-6 p-4 w-11/12 max-w-lg mx-auto shadow-lg">
                <button 
                    onClick={onClose} 
                    className="absolute text-blue-500 right-0 p-2 mx-6 rounded hover:bg-blue-100 hover:underline focus:outline-none"
                >
                    Close X
                </button>
                <h2 className="text-xl font-semibold my-4">{title}</h2>
                <div>{children}</div>
            </div>
        </div>
    );
}

export default Modal;
