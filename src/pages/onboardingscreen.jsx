import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import TopPanel from '../components/topPanel'

const OnboardingScreen = () => {
const [destination, setDestination] = useState('');
const [duration, setDuration] = useState('');
const [groupType, setGroupType] = useState('solo');

const days = [...Array(15)].map((_, index) => index + 1);

const navigate = useNavigate();
const handleButtonClick = () => {
    console.log('Destination:', destination);
    console.log('Duration:', duration); 
    console.log('Group Type:', groupType); 
    navigate('/dashboard', {
        state: { destination, duration, groupType },
    });
};

    return (
        <div className="h-screen px-4 py-2 bg-gradient-to-br from-yellow-100 via-sky-100 to-red-100 overflow-hidden dark:bg-gradient-to-br dark:from-[#161415] dark:via-[#161415] dark:to-[#161415]">
            <TopPanel />
            <div className=' h-full flex flex-col items-center justify-between'>
                <div className='w-full'>
                    <div className='flex flex-col items-center justify-center mt-10 mb-6'>
                        <h1 className="text-xl font-bold text-black dark:text-white ">Plan Your Journey , Your Way!</h1>
                        <p className="text-sm text-black dark:text-white mb-6">Let's create your personalised travel experince</p>
                    </div>  
                    {/* ==============================           FORM for travel    ==========================================  */}
                    <form 
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }} 
                        className="bg-transparent  rounded-xl"
                    >
                        {/* ======================    Choose    Location    ===============================  */}
                        <div className="text-black font-bold mb-2 dark:text-white">Where would you like to go?</div>
                        <div className='relative  border rounded-lg dark:bg-[#333333] mb-6'>
                            <input 
                            type="text" 
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className="w-full  px-10 mb-2 pt-2 outline-none focus:ring-0 dark:text-white
                                    placeholder:text-[#0b0809] placeholder:dark:text-white placeholder:dark:bg-[#333333] "            
                            placeholder="Enter Destination"
                            />
                            <i className="ri-map-pin-line text-[#666666] dark:text-white dark:bg-[#333333] absolute left-3 top-2 scale-125"></i>
                        </div>
                        {/* ======================    Duration Selection    ===============================  */}
                        <div className="text-black font-bold mb-2 dark:text-white">How long will you stay?</div>
                        <div className='relative border rounded-lg dark:bg-[#333333] mb-6'>
                        <select 
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className={`w-full px-10 pt-2 pb-2 outline-none bg-transparent dark:text-white text-black appearance-none`}                      
                        >
                        <option value="" className='w-full  px-10 mb-2 pt-2  dark:text-white'>Select Duration</option>
                        {days.map((day)=>{
                            return <option className='dark:text-white dark:bg-[#161415]' key={day} value={day}>{day}</option>
                        })}
                        </select>
                        <i className="ri-calendar-line text-[#666666] dark:text-white dark:bg-[#333333] absolute left-3 top-2 scale-125"></i>
                        </div>
                        {/* ======================    Group Selection   ===============================  */}
                        <div className="text-black font-bold mb-2 dark:text-white">Who are you travelling with?</div>
                        <div className='grid grid-cols-2 gap-4 mb-4'>
                            <div  onClick={() => setGroupType('solo')} 
                                className={`border-2 border-[#888888] dark:text-white px-4 py-2 rounded-lg flex items-center justify-center ${groupType === 'solo' ? 'border-red-500' : 'border-[#888888]'}`}>
                                <img src="/solo.png" className='w-6 h-6 mr-2 dark:invert dark:brightness-150' alt="" /> Solo
                            </div>
                            <div  onClick={() => setGroupType('couple')} 
                                className={`border-2 border-[#888888] dark:text-white px-4 py-2 rounded-lg flex items-center justify-center ${groupType === 'couple' ? 'border-red-500' : 'border-[#888888]'}`}>
                                <img src="/couple.png" className='w-6 h-6 mr-2 dark:invert dark:brightness-150' alt="" /> Couple
                            </div>
                            <div  onClick={() => setGroupType('family')} 
                                className={`border-2 border-[#888888] dark:text-white px-4 py-2 rounded-lg flex items-center justify-center ${groupType === 'family' ? 'border-red-500' : 'border-[#888888]'}`}>
                                <img src="/family.png" className='w-6 h-6 mr-2 dark:invert dark:brightness-150' alt="" /> Family
                            </div>
                            <div  onClick={() => setGroupType('friends')} 
                                className={`border-2 border-[#888888] dark:text-white px-4 py-2 rounded-lg flex items-center justify-center ${groupType === 'friends' ? 'border-red-500' : 'border-[#888888]'}`}>
                                <img src="/friends.png" className='w-6 h-6 mr-2 dark:invert dark:brightness-150' alt="" /> Friends
                            </div>         
                        </div>
                    </form>
                </div>

                {/* ======================    Button    ===============================  */}
                <button type="submit" 
                        onClick={handleButtonClick}
                        className="w-full mb-10 bg-[#3643fb]  text-white py-3  rounded-lg hover:bg-blue-600 active:scale-99 transition-shadow duration-200">
                    Continue
                </button> 
            </div>                       
        </div>
        );
    };

export default OnboardingScreen;
