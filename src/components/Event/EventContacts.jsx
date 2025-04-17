import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa';

export default function EventContacts({ contacts }) {
    const handleCopyToClipboard = (phone, name) => {
        navigator.clipboard.writeText(phone).then(() => {
            alert(`The contact details of ${name} have been copied to your clipboard.`);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    if (!contacts || contacts.length === 0) {
        return null; // Render nothing if there are no contacts
    }
    console.log(contacts)
    return (
        <div className="w-[80vw] mx-auto px-4 py-5 md:py-10">
            <h2 className="text-xl md:text-3xl font-bold text-center element-fade text-gray-800 mb-3 fustat-heading">
                <span className='gradient text-3xl md:text-5xl fustat-heading '> Contact</span> Us
            </h2>

            <p className="text-center text-gray-600 mb-5 element-fade">Click on a contact card to copy the phone number to your clipboard.</p>

            <div className="flex flex-wrap justify-center gap-6 py-3 px-4 md:px-16">
                {contacts.map((contact, index) => (
                    <div
                        key={index}
                        className="element-fade-cards bg-white border border-gray-200 shadow-lg rounded-2xl p-3 w-60 hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out flex flex-col justify-center items-center cursor-pointer"
                        onClick={() => handleCopyToClipboard(contact.phone, contact.name)}
                        title="Click to copy contact"
                    >
                        <span className="inline-block md:w-auto text-center bg-indigo-100 text-[#446cc3] rounded-full px-2 md:px-3 py-1 fustat-heading text-sm font-medium">
                            {contact.role}
                        </span>

                        <h3 className="text-xl font-semibold text-gray-800 my-2 fustat-heading text-center">
                            {contact.name}
                        </h3>

                        <div className="flex justify-center items-center gap-2 text-gray-600 text-center">
                            <FaPhoneAlt className="" />
                            <p className="font-medium manrope-paragraph">{contact.phone}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
