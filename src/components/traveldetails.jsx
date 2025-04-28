import React from 'react'

const TravelDetails = (props) => {
    const { destination, duration, groupType } = props;

    const dur= parseInt(duration);
    const activities = dur * 2; // Assuming 2 activities per day

    const curDate = new Date(); 
    curDate.setDate(curDate.getDate() + 15); 


    const startDate = curDate.toLocaleDateString(); 

    const finalDate = new Date(curDate); 
    finalDate.setDate(finalDate.getDate() + dur); 

    const endDate = finalDate.toLocaleDateString(); 



    return (
        <div>
            <h2 className='text-lg dark:text-white'>Your Upcoming Trip</h2>
            <div className='flex flex-col h-75  items-center justify-between rounded-2xl bg-center bg-cover' style={{ backgroundImage: "url('https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
                <div className='w-full p-4' >
                    <div className='flex items-center justify-between w-full mb-1'>                         
                        <p className='text-4xl font-extrabold uppercase text-white '>{destination}</p>                       
                        <i className="ri-arrow-right-up-line text-3xl text-white  "></i>
                    </div>
                    <p className='text-xs text-white '>{startDate}-{endDate}</p>                   
                </div>                
                <div className='flex items-center justify-between w-full  p-4 '>
                    <div className='flex items-center justify-between gap-2 py-2'>
                    <i className="ri-time-line text-lg text-[#D3F462] rounded-full w-7 h-7 flex justify-center items-center bg-[#414431]  "></i>
                    <div>
                        <p className='text-xs font-bold text-white '>{duration} Days</p>
                        <p className='text-xs text-white '>Duration</p>
                    </div>
                    </div>

                    <div className='flex items-center justify-between gap-2 py-2'>
                    <i className="ri-group-fill text-lg text-[#D3F462] rounded-full w-7 h-7 flex justify-center items-center bg-[#414431]  "></i>
                    <div>
                        <p className='text-xs font-bold text-white  uppercase'>{groupType}</p>
                        <p className='text-xs text-white '>Group Type</p>
                    </div>
                    </div>

                    <div className='flex items-center justify-between gap-2 py-2'>
                    <i className="ri-booklet-fill text-lg text-[#D3F462] rounded-full w-7 h-7 flex justify-center items-center bg-[#414431]  "></i>
                    <div>
                        <p className='text-xs font-bold text-white '>{activities} </p>
                        <p className='text-xs text-white '>Activites</p>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default TravelDetails;
