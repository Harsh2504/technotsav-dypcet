import React from 'react'
import { useParams } from 'react-router-dom'
import EventRulesAndRegulations from '../components/Event/EventRulesAndRegulations';
import EventRegisteration from '../components/Event/EventRegisteration';
import EventOther from '../components/Event/EventOther';
import EventSponsers from '../components/Event/EventSponsers';
import EventFAQ from '../components/Event/EventFAQ';
// import qr from '../assets/qr-code.png';
const EventPage = ({ department }) => {
  const eventsData = [
    {   
        "eventName": "Infinity Hunt", 
        "eventDescription": 
          "Infinity Hunt is a thrilling treasure hunt-style event that combines the excitement of discovery with the challenge of mental acuity. The event features a unique combination of aptitude questions, coding challenges, and engaging puzzles. Participants will solve clues, crack codes, and race against time to reach the final destination.",
        "hostDepartment": "CSE",
        "eventDay": "day1 or day2", 
        "startTime": "9:30 AM",
        "endTime": "3:00 PM",
        "venue": "New Building Labs",
        "eligibleParticipants": "Any students from engineering branch",
        "singleEntryFee": "100",
        "groupEntryFee": "400",
        "prizeMoney": {
          "first": "3000",
          "second": "2000",
          "third": "1000"
        },
        "rulesAndRegulations": [
          
          {
            "title": "Mandatory Attendance",
            "description":
              "All participants must report on time and attend the entire event from start to end (9:30 AM to 3:30 PM). Late entries or early exits may lead to disqualification."
          },
          {
            "title": "Group Participation Etiquette",
            "description":
              "Groups must stay together during the hunt. Splitting up to solve clues individually is not allowed and will result in penalty points."
          },
          {
            "title": "Respect for Venue",
            "description":
              "Participants must not damage property or tamper with equipment in labs, cabins, or buildings. Any such behavior will lead to immediate disqualification."
          },
          {
            "title": "No External Help",
            "description":
              "The use of mobile phones, the internet, or assistance from outsiders is strictly prohibited unless specified in a challenge. All answers must be solved independently by the team."
          },
          {
            "title": "Clue Integrity",
            "description":
              "Do not remove, hide, or alter any clues once found. If you find a clue meant for another team, report it to the coordinators."
          }
        ],
        "eventRounds": [
          {
            "title": "Round 1 – Aptitude Clash",
            "description":
              "Participants will face logic-based aptitude and reasoning questions. Top scorers will move to the next round.",
              "startTime":"9:30 AM"
          },
          {
            "title": "Round 2 – Code Crypt",
            "description":
              "A coding challenge where participants solve puzzles or decode logic to find clues.",
                "startTime":"11:00 AM"
          },
          {
            "title": "Final Round – The Hunt",
            "description":
              "The ultimate treasure hunt round across the venue, filled with hidden clues, riddles, and tech puzzles.",
                "startTime":"1:00 PM"
          }
        ],
    
        "registration": {
          "registrationFormLink": "https://example.com/register",
          "qrLink": "https://cdn.discordapp.com/attachments/1359769171042242570/1359769295546220747/qr.png?ex=67f8af57&is=67f75dd7&hm=35864327dd0ee239be4b0d1e9a44e84a8db5aa7dd09a7f02135683952c2580d6&",
          "startDate": "2023-10-01",
          "endDate": "2023-10-15"
        },
    
        "others": {
          "warnings": [
            "Carry your college ID cards.",
            "Wear comfortable shoes for movement.",
            "Be ready for outdoor and indoor challenges."
          ],
          "images": [
            "https://cdn.discordapp.com/attachments/1278743201339019299/1359769248175489134/image.png?ex=67f8af4c&is=67f75dcc&hm=d964610660d092983e03bbc0086cd0105f3b2748a11673e9669c2db8e2d77b63&",
            "https://cdn.discordapp.com/attachments/1278743201339019299/1354798101784957019/image.png?ex=67f865ce&is=67f7144e&hm=992009d5fad90dda47813743d3803b0a7b21dcce33c41b674560dfcfee790de5&"
          ],
          "map": "/maps/infinity-hunt-map.pdf"
        },
        "sponsors": [
          {
            "name": "TechNova Inc.",
            "logo": "https://thumbs.dreamstime.com/z/timbre-de-sponsor-86263619.jpg"
          },
          {
            "name": "CodeSphere",
            "logo": "https://thumbs.dreamstime.com/z/timbre-de-sponsor-86263619.jpg"
          }
        ],
        "faqs": [
            {
                "question": "Can I participate alone?",
                "answer":
                "Yes, you can register as an individual or in a group of up to 4 members."
            },
            {
                "question": "What if I miss the registration deadline?",
                "answer":
                "Unfortunately, late registrations will not be accepted. Please register before the deadline."
            },
            {
                "question": "Is there any age limit for participants?",
                "answer":
                "No, there is no age limit. All engineering students are welcome to participate."
            },
            {
                "question": "Will food be provided during the event?",
                "answer":
                "Yes, lunch and refreshments will be provided to all participants."
            }
        ]
      }
    ];



  const { eventname } = useParams()
  const [istrue, setIstrue] = React.useState(true)
  
  return (
    <div className="text-white p-8">
      <h1 className="text-3xl font-bold">{department.toUpperCase()} Department</h1>
      <p className="text-xl mt-4">Event: {eventname.replace(/-/g, ' ')}</p>
      {/* You can now fetch event details based on dept + eventname if needed */}

        {istrue && <EventHero />}
        {eventsData[0].rulesAndRegulations.length > 0 && <EventRulesAndRegulations rules={eventsData[0].rulesAndRegulations} />}
        <EventRegisteration {...eventsData[0]}/>
        <EventOther {...eventsData[0].others} />
        <EventSponsers sponsors={eventsData[0].sponsors} />
        <EventFAQ faqs={eventsData[0].faqs} />
    </div>
  )
}


const EventHero = () => {
  return (
    <div className="bg-blue-900 text-white p-8">
      <h1 className="text-4xl font-bold">Welcome to the Event Page</h1>
      <p className="mt-4">Explore the events happening in various departments.</p>
    </div>
  )
}

export default EventPage
