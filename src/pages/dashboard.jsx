import React from 'react'
import { useLocation } from 'react-router-dom';
import TopPanel from '../components/topPanel'
import BottomPanel from '../components/bottomPanel'
import Traveldetails from '../components/traveldetails'
import FlightDetails from '../components/flightDetails'
import Accommodation from '../components/accomodation'
import Calendar from '../components/calendar'
import Activities from '../components/activities';  

const dashboard = () => {

    const location = useLocation();
    const { destination, duration, groupType } = location.state || {};
    

    return (
        <div className='bg-[#F3F1F1] dark:bg-[#18171B]  px-4 py-2 h-full'>
            <TopPanel />
            {/* ==============================          Header Section   ==========================================  */}
            <div className='w-full flex items-center justify-between mt-4 mb-6'>
                <div className=''>
                    <h1 className='text-2xl font-bold dark:text-white'>Hello Chhavi!</h1>
                    <h2 className='text-md dark:text-white'>Ready for the trip?</h2>
                </div>
                <div className='flex items-center justify-center w-10 h-10 rounded-full bg-[#FF7337]'>
                    <h2 className='text-2xl  text-white'>C</h2>
                </div>
            </div>
            {/* ==============================          Travel Details   ==========================================  */}
            <Traveldetails  destination={destination} 
                            duration={duration} 
                            groupType={groupType}  />
            {/* ==============================          Flight Details   ==========================================  */}
            <FlightDetails destination={destination} duration={duration} />
            {/* ==============================          Accomodations   ==========================================  */}
            <Accommodation />
            {/* ==============================          Calendar   ==========================================  */}
            
            
            <div className='mb-4'>
            <div className='flex items-center justify-between mb-4'>
                <h2 className="text-2xl font-bold  text-black dark:text-white">Activities</h2>
                <p className='text-sm font-medium text-[#313ddf] dark:text-[#D3F462] underline'>See all</p>
            </div> 
            <Calendar duration={duration} />            
            </div>
            {/* ==============================          Activities   ==========================================  */}
            <Activities />
            {/* ==============================          Bottom Panel   ==========================================  */}
            <BottomPanel />
        </div>  
    )
}

export default dashboard