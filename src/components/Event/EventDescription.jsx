import React from 'react'

export default function EventDescription({eventName,eventDescription,eligibleParticipants}) {
  return (
    <div className='px-40 py-10'> 
    <div className='my-20'>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 fustat-heading ">What's <span className='gradient text-5xl'>{eventName}</span> ?</h2>
        <p className='manrope-paragraph text-justify'>{eventDescription}</p>
    </div>
    <hr class="h-px my-8 mx-10 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    <div  className='my-20 '>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 fustat-heading">Who can <span className='gradient text-5xl'>Participate</span> ?</h2>
        <p className='manrope-paragraph text-center'>{eligibleParticipants}</p>
    </div>

</div>
  )
}
