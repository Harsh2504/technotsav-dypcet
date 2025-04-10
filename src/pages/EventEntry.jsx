import React, { useState } from "react";

export default function EventEntry() {
    const [eventData, setEventData] = useState({
        eventName: "",
        eventDescription: "",
        hostDepartment: "",
        eventDay: "",
        startTime: "",
        endTime: "",
        venue: "",
        eligibleParticipants: "",
        singleEntryFee: "",
        groupEntryFee: "",
        prizeMoney: { first: "", second: "", third: "" },
        rulesAndRegulations: [],
        eventRounds: [],
        registration: {
          registrationFormLink: "",
          qrLink: "",
          startDate: "",
          endDate: "",
        },
        others: {
          warnings: [],
          images: [],
          map: "",
        },
        sponsors: [],
        faqs: [],
      });
    
      const [allEvents, setAllEvents] = useState([]);
      const [tempRule, setTempRule] = useState({ title: "", description: "" });
      const [tempRound, setTempRound] = useState({ title: "", description: "", startTime: "" });
      const [tempWarning, setTempWarning] = useState("");
      const [tempImage, setTempImage] = useState("");
      const [tempSponsor, setTempSponsor] = useState({ name: "", logo: "" });
      const [tempFaq, setTempFaq] = useState({ question: "", answer: "" });
      const [registrationForm, setRegistrationForm] = useState({
        registrationFormLink: "",
        qrLink: "",
        startDate: "",
        endDate: "",
      });
    
      const addEvent = () => {
        const updatedEvent = {
          ...eventData,
          registration: registrationForm,
        };
        setAllEvents([...allEvents, updatedEvent]);
        setEventData({
          eventName: "",
          eventDescription: "",
          hostDepartment: "",
          eventDay: "",
          startTime: "",
          endTime: "",
          venue: "",
          eligibleParticipants: "",
          singleEntryFee: "",
          groupEntryFee: "",
          prizeMoney: { first: "", second: "", third: "" },
          rulesAndRegulations: [],
          eventRounds: [],
          registration: {
            registrationFormLink: "",
            qrLink: "",
            startDate: "",
            endDate: "",
          },
          others: {
            warnings: [],
            images: [],
            map: "",
          },
          sponsors: [],
          faqs: [],
        });
        setRegistrationForm({ registrationFormLink: "", qrLink: "", startDate: "", endDate: "" });
      };
    
      const addRule = () => {
        setEventData({
          ...eventData,
          rulesAndRegulations: [...eventData.rulesAndRegulations, tempRule],
        });
        setTempRule({ title: "", description: "" });
      };
    
      const addRound = () => {
        setEventData({
          ...eventData,
          eventRounds: [...eventData.eventRounds, tempRound],
        });
        setTempRound({ title: "", description: "", startTime: "" });
      };
    
      const addWarning = () => {
        setEventData({
          ...eventData,
          others: {
            ...eventData.others,
            warnings: [...eventData.others.warnings, tempWarning],
          },
        });
        setTempWarning("");
      };
    
      const addImage = () => {
        setEventData({
          ...eventData,
          others: {
            ...eventData.others,
            images: [...eventData.others.images, tempImage],
          },
        });
        setTempImage("");
      };
    
      const addSponsor = () => {
        setEventData({
          ...eventData,
          sponsors: [...eventData.sponsors, tempSponsor],
        });
        setTempSponsor({ name: "", logo: "" });
      };
    
      const addFaq = () => {
        setEventData({
          ...eventData,
          faqs: [...eventData.faqs, tempFaq],
        });
        setTempFaq({ question: "", answer: "" });
      };
return (
    <div className="p-6 space-y-4 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">Add Event</h1>

        <input type="text" placeholder="Event Name" value={eventData.eventName} onChange={(e) => setEventData({ ...eventData, eventName: e.target.value })} className="w-full px-3 py-2 border rounded" />
        <textarea placeholder="Event Description" value={eventData.eventDescription} onChange={(e) => setEventData({ ...eventData, eventDescription: e.target.value })} className="w-full px-3 py-2 border rounded" rows={3} />
        <input type="text" placeholder="Host Department" value={eventData.hostDepartment} onChange={(e) => setEventData({ ...eventData, hostDepartment: e.target.value })} className="w-full px-3 py-2 border rounded" />
        <input type="text" placeholder="Event Day" value={eventData.eventDay} onChange={(e) => setEventData({ ...eventData, eventDay: e.target.value })} className="w-full px-3 py-2 border rounded" />
        <input type="text" placeholder="Start Time" value={eventData.startTime} onChange={(e) => setEventData({ ...eventData, startTime: e.target.value })} className="w-full px-3 py-2 border rounded" />
        <input type="text" placeholder="End Time" value={eventData.endTime} onChange={(e) => setEventData({ ...eventData, endTime: e.target.value })} className="w-full px-3 py-2 border rounded" />
        <input type="text" placeholder="Venue" value={eventData.venue} onChange={(e) => setEventData({ ...eventData, venue: e.target.value })} className="w-full px-3 py-2 border rounded" />
        <input type="text" placeholder="Eligible Participants" value={eventData.eligibleParticipants} onChange={(e) => setEventData({ ...eventData, eligibleParticipants: e.target.value })} className="w-full px-3 py-2 border rounded" />
        <input type="text" placeholder="Single Entry Fee" value={eventData.singleEntryFee} onChange={(e) => setEventData({ ...eventData, singleEntryFee: e.target.value })} className="w-full px-3 py-2 border rounded" />
        <input type="text" placeholder="Group Entry Fee" value={eventData.groupEntryFee} onChange={(e) => setEventData({ ...eventData, groupEntryFee: e.target.value })} className="w-full px-3 py-2 border rounded" />

        <div className="flex gap-2">
            <input type="text" placeholder="1st Prize" value={eventData.prizeMoney.first} onChange={(e) => setEventData({ ...eventData, prizeMoney: { ...eventData.prizeMoney, first: e.target.value } })} className="w-full px-3 py-2 border rounded" />
            <input type="text" placeholder="2nd Prize" value={eventData.prizeMoney.second} onChange={(e) => setEventData({ ...eventData, prizeMoney: { ...eventData.prizeMoney, second: e.target.value } })} className="w-full px-3 py-2 border rounded" />
            <input type="text" placeholder="3rd Prize" value={eventData.prizeMoney.third} onChange={(e) => setEventData({ ...eventData, prizeMoney: { ...eventData.prizeMoney, third: e.target.value } })} className="w-full px-3 py-2 border rounded" />
        </div>

        <div>
            <h3 className="font-semibold">Rules and Regulations</h3>
            <input placeholder="Title" value={tempRule.title} onChange={(e) => setTempRule({ ...tempRule, title: e.target.value })} className="w-full px-3 py-2 border rounded" />
            <input placeholder="Description" value={tempRule.description} onChange={(e) => setTempRule({ ...tempRule, description: e.target.value })} className="w-full px-3 py-2 border rounded" />
            <button onClick={addRule} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Rule</button>
            <ul>
                {eventData.rulesAndRegulations.map((rule, index) => (
                    <li key={index}>{rule.title}: {rule.description}</li>
                ))}
            </ul>
        </div>

        <div>
            <h3 className="font-semibold">Event Rounds</h3>
            <input placeholder="Title" value={tempRound.title} onChange={(e) => setTempRound({ ...tempRound, title: e.target.value })} className="w-full px-3 py-2 border rounded" />
            <input placeholder="Description" value={tempRound.description} onChange={(e) => setTempRound({ ...tempRound, description: e.target.value })} className="w-full px-3 py-2 border rounded" />
            <input placeholder="Start Time" value={tempRound.startTime} onChange={(e) => setTempRound({ ...tempRound, startTime: e.target.value })} className="w-full px-3 py-2 border rounded" />
            <button onClick={addRound} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Round</button>
            <ul>
                {eventData.eventRounds.map((round, index) => (
                    <li key={index}>{round.title} - {round.startTime}</li>
                ))}
            </ul>
        </div>

        <div>
            <h3 className="font-semibold">Registration Info</h3>
            <input placeholder="Form Link" value={registrationForm.registrationFormLink} onChange={(e) => setRegistrationForm({ ...registrationForm, registrationFormLink: e.target.value })} className="w-full px-3 py-2 border rounded" />
            <input placeholder="QR Link" value={registrationForm.qrLink} onChange={(e) => setRegistrationForm({ ...registrationForm, qrLink: e.target.value })} className="w-full px-3 py-2 border rounded" />
            <input placeholder="Start Date" value={registrationForm.startDate} onChange={(e) => setRegistrationForm({ ...registrationForm, startDate: e.target.value })} className="w-full px-3 py-2 border rounded" />
            <input placeholder="End Date" value={registrationForm.endDate} onChange={(e) => setRegistrationForm({ ...registrationForm, endDate: e.target.value })} className="w-full px-3 py-2 border rounded" />
            <ul>
                <li>Form Link: {registrationForm.registrationFormLink}</li>
                <li>QR Link: {registrationForm.qrLink}</li>
                <li>Start Date: {registrationForm.startDate}</li>
                <li>End Date: {registrationForm.endDate}</li>
            </ul>
        </div>

        <div>
            <h3 className="font-semibold">Warnings</h3>
            <input placeholder="Warning" value={tempWarning} onChange={(e) => setTempWarning(e.target.value)} className="w-full px-3 py-2 border rounded" />
            <button onClick={addWarning} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Warning</button>
            <ul>
                {eventData.others.warnings.map((w, index) => <li key={index}>{w}</li>)}
            </ul>
        </div>

        <div>
            <h3 className="font-semibold">Images</h3>
            <input placeholder="Image URL" value={tempImage} onChange={(e) => setTempImage(e.target.value)} className="w-full px-3 py-2 border rounded" />
            <button onClick={addImage} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Image</button>
            <ul>
                {eventData.others.images.map((img, index) => <li key={index}>{img}</li>)}
            </ul>
        </div>

        <div>
            <h3 className="font-semibold">Sponsors</h3>
            <input placeholder="Name" value={tempSponsor.name} onChange={(e) => setTempSponsor({ ...tempSponsor, name: e.target.value })} className="w-full px-3 py-2 border rounded" />
            <input placeholder="Logo URL" value={tempSponsor.logo} onChange={(e) => setTempSponsor({ ...tempSponsor, logo: e.target.value })} className="w-full px-3 py-2 border rounded" />
            <button onClick={addSponsor} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Sponsor</button>
            <ul>
                {eventData.sponsors.map((s, index) => <li key={index}>{s.name}</li>)}
            </ul>
        </div>

        <div>
            <h3 className="font-semibold">FAQs</h3>
            <input placeholder="Question" value={tempFaq.question} onChange={(e) => setTempFaq({ ...tempFaq, question: e.target.value })} className="w-full px-3 py-2 border rounded" />
            <input placeholder="Answer" value={tempFaq.answer} onChange={(e) => setTempFaq({ ...tempFaq, answer: e.target.value })} className="w-full px-3 py-2 border rounded" />
            <button onClick={addFaq} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add FAQ</button>
            <ul>
                {eventData.faqs.map((faq, index) => <li key={index}>{faq.question}</li>)}
            </ul>
        </div>

        <button onClick={addEvent} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Event</button>

        <div className="mt-6">
            <h2 className="text-xl font-semibold">JSON Preview:</h2>
            <pre className="bg-gray-100 p-4 rounded max-h-96 overflow-auto">
                {JSON.stringify(allEvents, null, 2)}
            </pre>
        </div>
    </div>
);
}