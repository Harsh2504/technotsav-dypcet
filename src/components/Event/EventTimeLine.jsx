import React from 'react'

export default function EventTimeLine({eventRounds,registration,eventDay}) {
return (
    <div className='px-40 py-20 min-h-screen'>

        <h2 className="text-3xl font-bold text-center text-gray-800 fustat-heading">Event</h2>
        <h1 className="text-7xl font-bold text-center fustat-heading gradient">Timeline</h1>
        <div className='px-10 md:px-50 py-10'>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">

            {/* Start Node of Timeline */}
            <li>
                <div className="timeline-middle">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#5480eb"
                        className="h-6 w-6 "> 
                        <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">{registration.startDate}</time>

                <div className="text-lg font-black">Registration Starts</div>
                The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
                personal computer. It played a pivotal role in establishing desktop publishing as a general
                office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
                in a beige case with integrated carrying handle; it came with a keyboard and single-button
                mouse.
                </div>
                <hr  className='bg-black/20' />
            </li>
                    
            {/* Intermediate Node of Timeline */}
            <li>
                    <hr className='bg-black/20'  />
                    <div className="timeline-middle">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#5480eb"
                    className="h-6 w-6 "> 
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
                    </svg>
                    </div>
                    <div className="timeline-end md:mb-10">
                    <time className="font-mono italic">{registration.endDate}</time>
                    <div className="text-lg font-black">Registration Ends</div>
                    iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
                    been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
                    and has evolved through seven distinct forms
                    </div>
                    <hr className='bg-black/20'  />
            </li>
        {/* Day of Event Node of Timeline */}
                  {eventDay && (
                        <li>
                            <hr className='bg-black/20'  />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="#5480eb"
                                    className="h-6 w-6 "> 
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-start mb-10 md:text-end" >
                                <time className="font-mono italic">{eventDay === 1 ? "24th April, 2025" : "25th April, 2025"}</time>
                                <div className="text-lg font-black">Day of Event</div>
                                The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
                                tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
                                iOS and other Apple products and services.
                            </div>
                            <hr className='bg-black/20'  />
                        </li>
                    )}
                    {eventRounds.map((round, index) => (
                        <li key={index}>
                        {/* start line */}
                        <hr className='bg-black/20'  />
                        <div className="timeline-middle">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="#5480eb"
                                className="h-6 w-6 "> 
                                <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                        </div>
                        <div className={index % 2 === 0 ?"timeline-end md:mb-10": "timeline-start mb-10 md:text-end"  }>
                                <time className="font-mono italic">{round.startTime}</time>
                                <div className="text-lg font-black">{round.title}</div>
                                {round.description}
                        </div>
                        {/* end line */}
                        {/* {index !== eventRounds.length - 1 && <hr />} */}
                        <hr className='bg-black/20'  />
                        </li>
                ))}
                    {/* Last Node of Timeline */}
                    <li>
                        <hr className='bg-black/20'  />
                        <div className="timeline-middle">
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="#5480eb"
                                className="h-6 w-6 "> 
                                <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className={eventRounds.length % 2 === 0 ? "timeline-end mb-10 md:text-start" : "timeline-start mb-10 md:text-end" }>
                        <time className="font-mono italic">2015</time>
                        <div className="text-lg font-black">End of Event</div>
                        The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
                        tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
                        iOS and other Apple products and services
                        </div>
                    </li>
            </ul>
        </div>
    </div>
)
}
