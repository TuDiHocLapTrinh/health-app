import React from 'react';
import { myExerciseData } from '~/mocks';

const MyExercise = () => {
  return (
    <div className=''>
      <div className='flex'>
        <h3 className=' text-[15px] font-normal pr-5 text-white'>
          MY
          <br />
          EXERCISE
        </h3>
        <span className=' text-[22px] font-normal text-white'>2021.05.21</span>
      </div>
      <div className='w-full'>
        <ul className=' h-[192px] flex flex-wrap justify-between marker:text-white list-disc overflow-auto px-6'>
          {myExerciseData.map((item, index) => (
            <li
              key={index}
              className='w-[calc(50%-48px)] border-b-2 border-[#777777] mr-12'
            >
              <div className='flex justify-between'>
                <div>
                  <span className='text-white text-[15px] font-light'>
                    {item.name}
                  </span>
                  <br />
                  <span className=' text-[#FFCC21] text-[15px] font-normal'>
                    {item.kcal}
                  </span>
                </div>
                <div className='text-[#FFCC21] text-[18px] font-normal'>
                  {item.time}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyExercise;
