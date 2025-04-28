import React from 'react';


const getWeekday = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short' }); 
};

const Calendar = ({ duration }) => {
    const today = new Date();
    today.setDate(today.getDate() + 15); 

    const activities =parseInt(duration)*2;

    const daysArray = Array.from({ length: duration }, (_, index) => {
        const day = new Date(today);
        day.setDate(today.getDate() + index);
        return {
        date: day.getDate(),
        weekday: getWeekday(day),
        };
    });

    return (
        <div className="flex flex-col overflow-x-auto gap-4 p-4 mb-10 scrollbar-hide rounded-3xl bg-white dark:bg-[#333333]">
            <div className='flex  items-center justify-start gap-2 '>
                <p className='bg-[#313DDF] text-white font-bold px-2 py-1 rounded-lg dark:bg-[#D3F462] dark:text-[#292929]'>Day Plan</p>
                <p className='text-[#313DDF] bg-white font-bold px-2 py-1 rounded-lg border-1 border-[#313DDF] dark:border-1 dark:border-[#D3F462] dark:text-[#D3F462] dark:bg-[#292929] '>{activities} Activities</p>
            </div>
            <div className='flex items-center justify-center gap-2 pl-6 ml-15'>
                {daysArray.map((day, index) => (
                    <div
                    key={index}
                    className="min-w-20 flex flex-col items-center justify-center  p-2 rounded-lg bg-white dark:bg-[#292929] border-1 border-[#313DDF] dark:border-1 dark:border-[#D3F462] shadow-md"
                    >
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300 uppercase">{day.weekday}</p>
                    <p className="text-xl font-bold text-black dark:text-white">{day.date}</p>
                    </div>
                ))}
            </div>
        
        </div>
    );
    };

export default Calendar;
