import React from 'react';

const MyDiaryCard = ({ date, time, content }) => {
  return (
    <div className=' w-[cal(25%-12px)] h-[231px] border-2 border-[#707070] px-4 pt-4 flex items-center flex-col '>
      <div className='w-full text-lg font-normal'>
        {date}
        <br />
        {time}
      </div>
      <div className=' w-full h-[132px] text-xs font-light mt-2'>
        私の日記の記録が一部表示されます。
        <br />
        <p className='line-clamp-6'>{content}</p>
      </div>
    </div>
  );
};

export default MyDiaryCard;
