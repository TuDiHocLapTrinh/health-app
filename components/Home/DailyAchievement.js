import PieChart from './Piechart';
import moment from 'moment';
import React from 'react';
import { dailyAchievement } from '~/mocks';

const DailyAchievement = () => {
  return (
    <div
      style={{
        backgroundImage: "url('images/d01.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='h-[316px] md:w-2/5 flex items-center justify-center w-full'
    >
      <PieChart
        date={moment(dailyAchievement.date, 'YYYY-MM-DD').format('MM/DD')}
        percent={dailyAchievement.percent}
      />
    </div>
  );
};

export default DailyAchievement;
