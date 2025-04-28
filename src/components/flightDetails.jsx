import React from 'react'

const flightDetails = (props) => {
  const { destination } = props;
  const date = new Date();
  date.setDate(date.getDate() + 15); 
  const flightdate = date.toLocaleDateString();
  const flightTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  
  
  return (
    <div className='bg-center bg-cover h-40 rounded-2xl mt-10 mb-4 p-4 border-2 border-amber-400' style={{ backgroundImage: "url('/flight.png')" }}>
      <div className='flex items-center justify-between w-full  rounded-2xl  '>
          <h2 className='text-lg font-medium text-white'>Flight Details</h2>
          <p className='text-sm font-medium  text-[#D3F462] underline'>See all</p> 
      </div>
      <p className='text-lg font-light text-white mb-6'>{flightdate},{flightTime}</p>
      <div className='flex items-center justify-start gap-2  w-full '>
        <div>
          <p className='font-bold text-white '>DEL</p>
          <p className='text-white'>Delhi,India</p>
        </div>
        <div><i className="ri-arrow-right-long-line text-3xl text-white"></i></div>
        <div>
        <p className='font-bold text-white'>ARP</p>
        <p className='text-white'>{destination}</p>
        </div>
      </div>
    </div>
  )
}

export default flightDetails