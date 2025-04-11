import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import EventRulesAndRegulations from "../components/Event/EventRulesAndRegulations";
import EventRegisteration from "../components/Event/EventRegisteration";
import EventOther from "../components/Event/EventOther";
import EventSponsers from "../components/Event/EventSponsers";
import EventFAQ from "../components/Event/EventFAQ";
import EventHero from "../components/Event/EventHero";
import EventRounds from "../components/Event/EventRounds";
import EventPrizes from "../components/Event/EventPrizes";
import EventDescription from "../components/Event/EventDescription";
import EventTimeline from "../components/Event/EventTimeLine";
import { HiChevronLeft } from "react-icons/hi";
import eventsDataPool from "./eventsData.json";
import EventContacts from "../components/Event/EventContacts";

const EventPage = ({ department }) => {
  const registrationRef = useRef(null);

  const { eventname } = useParams(); // assuming you use :eventname in route
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const formattedName = eventname.replace(/-/g, " ").toLowerCase();//infinity-hunt ---> infinty hunt

    const foundEvent = eventsDataPool.find(
      (event) =>
        event.hostDepartment.toLowerCase() === department.toLowerCase() &&
        event.eventName.toLowerCase() === formattedName
    );

    console.log("🔍 Found Event:", foundEvent); // clearer logging
    setEventData(foundEvent || null);
  }, [department, eventname]);

  console.log(eventData);
  if (!eventData) {
    return (
      <div className='flex flex-col justify-center items-center w-screen min-h-screen bg-[#e3e3e3] bg-[radial-gradient(#00000089,transparent_2px)] [background-size:20px_20px] p-4'>
        <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center gradient mb-6 sm:mb-8 fustat-heading'>
          Event Not Found
        </h1>
        <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-black/80 font-semibold text-center manrope-paragraph max-w-3xl'>
          The event you're looking for doesn't exist or is still loading.<br className='hidden sm:block' />Please check back later or verify the event link.
        </p>
      </div>
    );
  }
  
  

  const handleScrollToRegistration = () => {
    if (registrationRef.current) {
      registrationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="text-black">
           <button 
        onClick={() => window.history.back()} 
        className="fixed top-5 left-5 border-2 flex justify-center items-center gap-1 text-[#365b9e] duration-200 cursor-pointer border-[#365b9e] transition-all ease-in-out hover:bg-[linear-gradient(to_bottom,_#30538e,_#5c89ff)] rounded-xl hover:text-white px-4 py-2 font-black md:font-bold fustat-heading active:scale-95 "
      >
        <HiChevronLeft className="text-2xl" />
        Back
      </button>
      {/* <h1 className="text-3xl font-bold">
        {department.toUpperCase()} Department
      </h1>
      <h2 className="text-2xl mt-4 font-black gradient">
        Event Name: {eventData?.eventName || "N/A"}
      </h2>

      <p className="mt-4 text-black">{eventData.eventDescription}</p> */}

      <EventHero {...eventData} onRegisterClick={handleScrollToRegistration} />
      <EventDescription {...eventData} />
      <EventRounds rounds={eventData.eventRounds} />

      <EventPrizes prizes={eventData.prizeMoney} />
      <EventTimeline {...eventData} />
      {eventData.rulesAndRegulations.length > 0 && (
        <EventRulesAndRegulations rules={eventData.rulesAndRegulations} />
      )}
      <EventRegisteration {...eventData}  ref={registrationRef}/>
      <EventOther {...eventData.others} />
      <EventSponsers sponsors={eventData.sponsors} />
      <EventFAQ faqs={eventData.faqs} />
      <EventContacts contacts={eventData.contacts} />
    </div>
  );
};

export default EventPage;
