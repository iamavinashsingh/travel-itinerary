import React from 'react';



const accommodations = [
    { id: 1, name: 'Luxury Hotel', checkInDate:'12/25/2025',checkOutDate:'12/26/2025',status : 'confirmed',image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 2, name: 'Cozy Cottage',checkInDate:'12/26/2025',checkOutDate:'12/27/2025',status : 'pending', image: 'https://images.pexels.com/photos/30169370/pexels-photo-30169370/free-photo-of-luxurious-tropical-resort-with-swimming-pool.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 3, name: 'Beach Resort',checkInDate:'12/27/2025',checkOutDate:'12/28/2025',status :'pending', image: 'https://images.pexels.com/photos/3155696/pexels-photo-3155696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 4, name: 'Mountain Cabin',checkInDate:'12/28/2025',checkOutDate:'12/28/2025',status: 'confirmed', image: 'https://images.pexels.com/photos/42240/pexels-photo-42240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
];

const Accommodation = () => {

    const time = new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
    });
    
    return (
        <div className="mt-6 mb-4">
            <div className='flex items-center justify-between mb-4'>
                <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Accommodation</h2>
                <p className='text-sm font-medium text-[#313ddf] dark:text-[#D3F462] underline'>See all</p>
            </div>          
            <div className="flex overflow-x-scroll space-x-4 scrollbar-hide pb-4">
                {accommodations.map((item) => (
                    <div key={item.id} className="min-w-[250px] bg-white dark:bg-[#4D4D4D] rounded-lg shadow-lg overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.name}</h3>
                            <div className=''>
                                <p className='text-black dark:text-white '>Check In: <span className='font-extralight text-xs text-black dark:text-white'>{item.checkInDate} , {time}</span> </p>
                                <p className='text-black dark:text-white '>Check Out: <span className='font-extralight text-xs text-black dark:text-white'>{item.checkOutDate} , {time}</span> </p>
                            </div>
                            <div className='flex items-center justify-between mt-2 '>
                                <h2 className='text-sm font-bold  text-black dark:text-white'>2 Nights</h2>
                                <div>
                                <p className={`text-sm font-bold mt-2 ${item.status === 'pending' ? 'text-red-400 ' : 'text-green-400 '}`}>
                                {item.status === 'pending' ? (
                                    <i className="ri-time-line"></i>  
                                ) : (
                                    <i className="ri-checkbox-circle-line"></i>
                                )}
                                {item.status}
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
            
        </div>
    );
};

export default Accommodation;
