import React from 'react'

const Map = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-8 text-center fustat-heading element-fade">
                Our<span className='gradient text-3xl md:text-5xl'> Location</span>
            </h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.8950001146054!2d74.2379549749192!3d16.73209008404768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1008d2532b153%3A0xa154d05f5c9250ae!2sD.%20Y.%20Patil%20College%20Of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1744793762178!5m2!1sen!2sin"  height="400" style={{ "border": 0,borderRadius:"30px" }} allowfullscreen=""  className='p-4 w-96 md:w-[1000px] rounded-2xl overflow-hidden' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Map