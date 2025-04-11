import React from 'react'

export default function EventDescription({eventName,eventDescription,eligibleParticipants,venue}) {
  return (
    <div className='px-5 md:px-40 py-10 min-h-screen flex flex-col items-center justify-center'> 
    <div className='my-8 md:my-16'>
        <h2 className="text-xl md:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-8 fustat-heading ">What's <span className='gradient text-3xl md:text-5xl'>{eventName}</span> ?</h2>
        <p className='manrope-paragraph text-justify text-sm md:text-base'>
        {eventDescription?.trim()
          ? eventDescription
          : "Description not available. Please contact the coordinators for more information."}
      </p>
    </div>
    <hr className="h-[1px] w-full my-10 mx-10 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 border-0" />

    <div  className='my-8 md:my-16'>
        <h2 className="text-xl md:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-8 fustat-heading ">Who can <span className='gradient text-3xl md:text-5xl'>Participate</span> ?</h2>
        <p className='manrope-paragraph text-center text-sm md:text-base'>
          {eligibleParticipants?.trim()
            ? eligibleParticipants
            : "Eligibility details not provided. Please reach out to the event coordinators for clarification."}
        </p>
    </div>
    <hr className="h-[1px]  w-full  my-10 mx-10 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 border-0" />

    <div className='my-8 md:my-16'>
        <h2 className="text-xl md:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-8 fustat-heading ">Where's <span className='gradient text-3xl md:text-5xl'>Venue</span> ?</h2>
        <p className='manrope-paragraph text-center text-sm md:text-base'>
          {venue || "Venue details will be announced soon. Stay tuned!"}
        </p>
    </div>
</div>
  )
}
