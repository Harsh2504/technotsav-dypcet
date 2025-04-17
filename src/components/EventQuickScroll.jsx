import React from 'react'
import { useRef } from 'react';
const EventQuickScroll = () => {
    const departmentRefs = useRef();
    const handleScrollTo = (id) => {
        if (departmentRefs.current[id]) {
          departmentRefs.current[id].scrollIntoView({ behavior: 'smooth' });
        }
      };
      
  return (
    <div>
        <h1 className="element-fade text-5xl md:text-7xl mb-5 md:mb-10  md:my-10 px-5 md:px-40 md:h-20  w-screen  text-center spacecrusaders-heading gradient">
        EVENTS
      </h1>
      {/* <div className="my-10  flex gap-3 flex-col items-center justify-center">
          <button
            onClick={handleDownloadRuleBook}
            className="text-[#30538e] font-bold active:text-white w-50 active:bg-gradient-to-b from-[#30538e] to-[#5c89ff] border-[#365b9e] transition-all duration-300 ease-in-out border-2  active:border-[#365b9e] rounded-xl px-4 py-3 active:scale-95"
          >
            Download RuleBook
          </button>
        </div> */}
      <p className="text-center element-fade text-base md:text-lg text-gray-700 mb-3 md:mb-5 px-5 md:px-40 manrope-paragraph">
      Quickly jump to your department's events by clicking below ..
    </p>

    <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-10 px-5 md:px-40 element-fade">
      {[
        { id: 'techl', label: 'Techno Highlights' },
        { id: 'aiml', label: 'AIML' },
        { id: 'chem', label: 'Chemical' },
        { id: 'civil', label: 'Civil' },
        { id: 'cse', label: 'CSE' },
        { id: 'e&tc', label: 'E&TC' },
        { id: 'mech', label: 'Mechanical' },
        { id: 'arch', label: 'Architecture' },
        
      ].map((dept) => (
        <>
        <button
          key={dept.id}
          onClick={() => handleScrollTo(dept.id)}
          className="  hidden md:block text-sm md:text-base font-medium fustat-heading px-4 py-2 rounded-full border-2 border-[#30538e] text-[#30538e] hover:bg-[linear-gradient(to_bottom,_#30538e,_#5c89ff)] active:scale-95 hover:text-white transition-all duration-100"
        >
          {dept.label}
        </button>
        <button
          key={dept.id}
          onClick={() => handleScrollTo(dept.id)}
          className=" block md:hidden text-sm md:text-base font-medium fustat-heading px-4 py-2 rounded-full border-2 border-[#30538e] text-[#30538e] active:bg-[linear-gradient(to_bottom,_#30538e,_#5c89ff)] active:scale-95  active:text-white transition-all duration-100"
        >
          {dept.label}
        </button>
        </>
      ))}
    </div>
    </div>
  )
}

export default EventQuickScroll