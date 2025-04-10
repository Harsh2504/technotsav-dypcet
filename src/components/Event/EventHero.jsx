import React from 'react'
export default function EventHero({eventName,eventDescription, hostDepartment, eventDay}) {
  const departmentFullName = {
    cse: "Department of Computer Science and Engineering",
    aiml: "Department of Artificial Intelligence and Machine Learning",
    arch: "Department of Architecture",
    chem: "Department of Chemical Engineering",
    civil: "Department of Civil Engineering",
    "e&tc": "Department of Electronics and Telecommunication Engineering",
    mech: "Department of Mechanical Engineering",
    ecell: "Entrepreneurship Cell",
  };

  const fullHostDepartment = departmentFullName[hostDepartment.toLowerCase()] || hostDepartment;

  return (
    <div className="p-8 h-screen flex flex-col bg-transparent justify-center items-center text-black bg-[radial-gradient(#00000089,transparent_2px)] [background-size:20px_20px] ">
      <p className='text-center bg-[linear-gradient(to_bottom,_#4870B6,_#8AAAFE)] text-white rounded-full px-3 py-1 fustat-heading text-lg tracking-wide font-medium uppercase my-3'>Technotsav Day {eventDay}</p>
      <p className='fustat-heading text-xl'> {fullHostDepartment}</p>
      <p className='manrope-paragraph'>Presents</p>
      <h1 className="text-9xl spacecrusaders-heading gradient text-center mb-10 w-1/2">{eventName}</h1>
      <button className="bg-[linear-gradient(to_bottom,_#30538e,_#5c89ff)] rounded-lg text-white px-4 py-3 font-bold manrope-paragraph active:scale-95 transition-all ease-in-out">
        Register Now
      </button>
    </div>
  );
}
