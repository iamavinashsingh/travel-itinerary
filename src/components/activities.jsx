import React from 'react';

const Activities = () => {
    const curDate = new Date(); 
    curDate.setDate(curDate.getDate() + 15); 
    const startDate = curDate.toLocaleDateString(); 

    return (
        <div className="flex flex-col gap-4 p-4 mb-15">
        <div className="flex items-center justify-start gap-4 mb-4">
            <p className='dark:bg-[#D3F462] dark:text-[#292929] bg-[#313DDF] text-white p-1 font-bold rounded-lg'>Day 1 {startDate}</p>
            <p className='text-[#313DDF] dark:text-[#D3F462]'> <i className="ri-user-search-fill"></i> 3 Activities</p>
        </div>

        
        <div className="flex flex-col gap-4 p-2 border rounded-xl border-[#313DDF] dark:border-[#D3F462]">
            {/* 🪄 Activity Card 1 */}
            <div className="flex items-center rounded-lg bg-white dark:bg-[#292929]  ">
            {/* Left Side Image */}
            <img src="https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Activity 1" className="w-35 h-35 rounded-l-lg object-cover mr-1" />
            
            {/* Right Side Details */}
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-4">River Rafting Adventure</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Timing: 10:00 AM </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Duration: 2 hours</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Pickup: Hotel Lobby</p>
            </div>
            </div>

            {/* 🪄 Activity Card 2 */}
            <div className="flex items-center rounded-lg bg-white dark:bg-[#292929] ">
            {/* Left Side Image */}
            <img src="https://images.pexels.com/photos/2121549/pexels-photo-2121549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Activity 2" className="w-35 h-35 rounded-l-lg object-cover mr-1" />
            
            {/* Right Side Details */}
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Spiritual Temple Visit</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Timing: 2:00 PM</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Duration: 2 hours</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Pickup: Main Entrance</p>
            </div>
            </div>
            {/* 🪄 Activity Card 3 */}
            <div className="flex items-center rounded-lg bg-white dark:bg-[#292929] ">
            {/* Left Side Image */}
            <img src="https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Activity 2" className="w-35 h-35 rounded-l-lg object-cover mr-1" />
            
            {/* Right Side Details */}
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-4">City Skyline Experience</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Timing: 6:00 PM     </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Duration: 2 hours</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Pickup: Main Entrance</p>
            </div>
            </div>

        </div>
        </div>
    );
};

export default Activities;
