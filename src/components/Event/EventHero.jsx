import React from 'react'
import { FiShare,FiArrowLeft  } from "react-icons/fi";

export default function EventHero({eventName,eventDescription, hostDepartment, eventDay,onRegisterClick }) {
  const departmentFullName = {
    cse: "Department of Computer Science and Engineering",
    aiml: "Department of Artificial Intelligence and Machine Learning",
    arch: "Department of Architecture",
    chem: "Department of Chemical Engineering",
    civil: "Department of Civil Engineering",
    "e&tc": "Department of Electronics and Telecommunication Engineering",
    mech: "Department of Mechanical Engineering",
    techl: "Techno Higlights",
  };

  const handleShare = async () => {
    const shareData = {
      title: "Technotsav 2K25",
      text: "Join me at Technotsav 2K25 – a national-level tech fest full of innovation and thrill!",
      url: window.location.href, // You can also replace this with a specific event URL
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        throw new Error("Web Share API not supported");
      }
    } catch (err) {
      // Fallback: copy URL to clipboard
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(shareData.url);
          alert("Link copied to clipboard!");
        } else {
          // Fallback for older iOS versions
          const textArea = document.createElement("textarea");
          textArea.value = shareData.url;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
          alert("Link copied to clipboard!");
        }
      } catch (clipboardErr) {
        console.error("Clipboard copy failed:", clipboardErr);
        alert("Failed to share or copy the link.");
      }
    }
  };
  
  const fullHostDepartment = departmentFullName[hostDepartment.toLowerCase()] || hostDepartment;

  return (
    <div className="p-8 h-screen gap-4 md:gap-0 flex flex-col bg-transparent justify-center items-center text-black bg-[radial-gradient(#00000089,transparent_2px)] [background-size:20px_20px] ">
 
      <p className='text-center bg-[linear-gradient(to_bottom,_#4870B6,_#8AAAFE)] text-white rounded-full px-3 py-1 fustat-heading text-sm md:text-lg tracking-wide font-medium uppercase my-3'>{eventDay==3 ? "Technotsav Day 1 & 2" :  `Technotsav Day ${eventDay}`}</p>
      <p className='fustat-heading text-lg text-center md:text-xl '> {fullHostDepartment}</p>
      <p className='manrope-paragraph'>Presents</p>
      <h1 className="text-6xl md:text-8xl spacecrusaders-heading gradient text-center mb-10 w-full">
        {eventName.split(' ').map((word, index) => (
          <span key={index} className="block">{word}</span>
        ))}
      </h1>
      <div className='flex gap-2 flex-row items-center justify-cente</div>r'>
        <button onClick={onRegisterClick} className="border-2 hidden md:block text-[#365b9e] duration-200 cursor-pointer border-[#365b9e] transition-all ease-in-out hover:bg-[linear-gradient(to_bottom,_#30538e,_#5c89ff)] rounded-xl hover:text-white px-4 py-3 font-black md:font-bold fustat-heading active:scale-95 ">
          Register Now
        </button>
        <button onClick={onRegisterClick} className="border-2 block md:hidden bg-[linear-gradient(to_bottom,_#30538e,_#5c89ff)] md:backdrop-blur-sm text-white duration-200 cursor-pointer border-[#365b9e] transition-all ease-in-out hover:bg-[linear-gradient(to_bottom,_#30538e,_#5c89ff)] rounded-xl hover:text-white px-4 py-3 font-black md:font-bold fustat-heading active:scale-95 ">
          Register Now
        </button>
        {/* Share Button */}
        <button
          onClick={handleShare}
          className="text-[#365b9e] hover:text-white hover:bg-[linear-gradient(to_bottom,_#30538e,_#5c89ff)] transition-all duration-300 ease-in-out border-2 border-[#365b9e] rounded-xl px-4 py-3 active:scale-95"
          title="Share this event"
        >
          <FiShare className="text-xl" />
        </button>
      </div>
    </div>
  );
}
