import React from 'react'
import '../global.css'
export default function EventHero({eventName,eventDescription}) {
  return (
    <div className="p-8 rounded-xl my-6  ">
    <h1 className="text-6xl " style={{
        fontFamily:  'Space Crusader'
    }}>Harhshhse</h1>

    <p className="mt-4">{eventDescription}</p>
  </div>
  )
}
