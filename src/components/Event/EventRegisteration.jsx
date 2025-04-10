import React from 'react'

const EventRegisteration = ({
    singleEntryFee,
    groupEntryFee,
    registrationFormLink,
    qrLink,
    registration,
    endDate,
  }) => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
      Registration
    </h2>

    <div className="bg-white rounded-2xl shadow-md p-6 space-y-6 bg-[linear-gradient(10deg,_#0a0a0a,_#1c1c1c,_#3e3e3e,_#1c1c1c,_#0a0a0a)]">
      <div className="flex flex-col sm:flex-row justify-around gap-6 text-center ">
        <div className="flex-1 ">
          <p className="text-lg font-medium text-gray-700 mb-2 text-white fustat-heading">
            Single Entry
          </p>
          <button
            onClick={() => window.open(registrationFormLink, "_blank")}
            className="bg-indigo-800 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-all fustat-heading"
          >
            Register ₹{singleEntryFee}
          </button>
        </div>
        <div className="flex-1">
          <p className="text-lg font-medium text-gray-700 mb-2 text-white fustat-heading">
            Group Entry
          </p>
          <button
            onClick={() => window.open(registrationFormLink, "_blank")}
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-all fustat-heading"
          >
            Register ₹{groupEntryFee}
          </button>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-600 text-sm text-white">
          Registration Open:{" "}
          <span className="font-semibold text-gray-800 text-white">{registration.startDate}</span> to{" "}
          <span className="font-semibold text-gray-800 text-white">{registration.endDate}</span>
        </p>
      </div>

      <div className="flex justify-center">
        <div className="p-4 border rounded-xl bg-gray-50">
          <img
            src={registration.qrLink}
            alt="Registration QR Code"
            className="w-40 h-40 object-contain mx-auto"
          />
          <p className="text-xs text-center text-gray-500 mt-2">
            Scan to register
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default EventRegisteration