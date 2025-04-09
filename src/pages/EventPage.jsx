import React from 'react'
import { useParams } from 'react-router-dom'

const EventPage = ({ department }) => {
  const { eventname } = useParams()
  const [istrue, setIstrue] = React.useState(true)
  return (
    <div className="text-white p-8">
      <h1 className="text-3xl font-bold">{department.toUpperCase()} Department</h1>
      <p className="text-xl mt-4">Event: {eventname.replace(/-/g, ' ')}</p>
      {/* You can now fetch event details based on dept + eventname if needed */}

        {istrue && <EventHero />}

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
