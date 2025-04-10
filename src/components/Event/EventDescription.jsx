import React from 'react'

export default function EventDescription({eventName,eventDescription,eligibleParticipants,venue}) {
  return (
    <div className='px-40 py-10 min-h-screen'> 
    <div className='my-16'>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 fustat-heading ">What's <span className='gradient text-5xl'>{eventName}</span> ?</h2>
        <p className='manrope-paragraph text-justify'>{eventDescription}</p>
    </div>
    <hr className="h-[1px] my-10 mx-10 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 border-0" />

    <div  className='my-16 '>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 fustat-heading">Who can <span className='gradient text-5xl'>Participate</span> ?</h2>
        <p className='manrope-paragraph text-center'>{eligibleParticipants}</p>
    </div>
    <hr className="h-[1px] my-10 mx-10 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 border-0" />

    <div className='my-16'>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 fustat-heading ">Where's <span className='gradient text-5xl'>Venue</span> ?</h2>
        <p className='manrope-paragraph text-center'>{venue}</p>
    </div>


</div>
  )
}
