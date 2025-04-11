import React from 'react'

export default function EventTimeLine({eventRounds,registration,eventDay}) {
return (
    <div className='px-5 md:px-40 py-5 md:py-10 min-h-screen'>

        <h2 className="text-xl md:text-3xl font-bold text-center text-gray-800 fustat-heading">Event</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-center fustat-heading gradient">Timeline</h1>
        <div className='px-5 md:px-50 py-10'>
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
                <div className="timeline-start mb-5 md:mb-10 md:text-end manrope-paragraph text-black/70 " >
                <time className="font-mono italic text-black">{registration.startDate}</time>

                <div className="text-lg font-black fustat-heading text-black">Registration Starts</div>
                Get ready to kickstart your journey!
                Book your seat early and secure your chance to explore, compete, and experience something extraordinary.
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
                    <div className="timeline-end mb-5 md:mb-10 manrope-paragraph text-black/70 ">
                    <time className="font-mono italic text-black">{registration.endDate}</time>
                    <div className="text-lg font-black fustat-heading text-black">Registration Ends</div>
                    Last call to register! Don’t miss your chance to learn, compete, and win. Lock in your spot before it’s too late!
                    </div>
                    <hr className='bg-black/20'  />
            </li>
        {/* Day of Event Node of Timeline */}
        {eventDay && (
            <li>
                <hr className='bg-black/20' />
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#5480eb"
                        className="h-6 w-6">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-start mb-5 md:mb-10 md:text-end manrope-paragraph text-black/70">
                    <time className="font-mono italic text-black">
                        {eventDay === 1 ? "24th April, 2025" : eventDay === 2 ? "25th April, 2025" : "24th & 25th April, 2025"}
                    </time>
                    <div className="text-lg font-black fustat-heading text-black">Day of Event</div>
                    The big day is here — get ready to dive into a world of innovation and thrill. Be prepared and make sure to reach the venue on time to experience the action from the very start!
                </div>
                <hr className='bg-black/20' />
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
                        <div className={index % 2 === 0 ?"timeline-end mb-5 md:mb-10 manrope-paragraph text-black/70": "timeline-start mb-10 md:text-end manrope-paragraph text-black/70 "  }>
                                <time className="font-mono italic text-black">{round.startTime ? round.startTime : "Time will be conveyed soon."}</time>
                                <div className="text-lg font-black fustat-heading text-black">{round.title}</div>
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
                        <div className={eventRounds.length % 2 === 0 ? "timeline-end mb-5 md:mb-10 md:text-start manrope-paragraph text-black/70" : "timeline-start mb-10 md:text-end manrope-paragraph text-black/70 " }>
                        <time className="font-mono italic text-black">{eventDay == 1 ? "24th April, 2025" : "25th April, 2025"}</time>
                        <div className="text-lg font-black fustat-heading text-black">End of Event</div>
                        The event will conclude with a closing ceremony, followed by the prize distribution. Make sure to stay till the end to celebrate the winners and capture some unforgettable moments!
                        </div>
                    </li>
            </ul>
        </div>
    </div>
)
}
