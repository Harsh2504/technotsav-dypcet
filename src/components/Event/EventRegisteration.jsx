import React from 'react'

const EventRegisteration = ({
    singleEntryFee,
    groupEntryFee,
    registration,
    
}) => {
    return (
        <section className="max-w-3xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 fustat-heading">
                Registration
            </h2>

            <div className="bg-white rounded-2xl shadow-md p-6 space-y-6 bg-[linear-gradient(10deg,_#0a0a0a,_#1c1c1c,_#3e3e3e,_#1c1c1c,_#0a0a0a)]">
                <div className="flex flex-col sm:flex-row justify-center gap-10 text-center ">
                    <div className=" ">
                        <p className="text-lg font-medium  mb-2 text-white fustat-heading">
                            Single Entry Fee
                        </p>
                        <button
                            onClick={() => window.open(registrationFormLink, "_blank")}
                            className="bg-white text-indigo-600 px-4 py-1 rounded-full hover:bg-indigo-600 hover:text-white transition-all fustat-heading text-md"
                        >
                           Pay ₹{singleEntryFee}
                        </button>
                    </div>
                    <div className="">
                        <p className="text-lg font-medium mb-2 text-white fustat-heading">
                            Group Entry Fee
                        </p>
                        <button
                            onClick={() => window.open(registration.registrationFormLink, "_blank")}
                            className="bg-white text-indigo-600 px-4 py-1 rounded-full hover:bg-indigo-600 hover:text-white transition-all fustat-heading text-md"
                        >
                          Pay ₹{groupEntryFee}
                        </button>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-sm text-white manrope-paragraph">
                        Registration Open:{" "}
                        <span className="font-semibold  text-white">{registration.startDate}</span> to{" "}
                        <span className="font-semibold  text-white">{registration.endDate}</span>
                    </p>
                </div>
                
                <div className="flex justify-center">
                    <div className="p-4 border rounded-xl bg-gray-50">
                        <img
                            src={registration.qrLink}
                            alt="Registration QR Code"
                            className="w-40 h-40 object-contain mx-auto"
                        />
                        <p className="text-xs text-center text-gray-500 mt-2 manrope-paragraph">
                            Scan to register
                        </p>
                    </div>
                </div>
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                    <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-[#161616]">or</span>
                </div>
                <div className="flex justify-center mb-10">
                <button
                            onClick={() => window.open(registration.registrationFormLink, "_blank")}
                            className="bg-white text-indigo-600 px-4 py-1 rounded-full hover:bg-indigo-600 hover:text-white transition-all fustat-heading text-md"
                        >
                         Register Here
                </button>
                </div>
            </div>
        </section>
    )
}

export default EventRegisteration