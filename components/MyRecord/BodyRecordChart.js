import LineChart from '../LineChart';
import React from 'react';
import moment from 'moment';
import clsx from 'clsx';
import { bodyRecordDataChart, bodyRecordType } from '~/mocks';

const BodyRecordChart = () => {
  return (
    <div className='h-96 w-full bg-ha-dark-500 pt-4'>
      <div className='flex ml-6'>
        <h3 className='text-white font-normal text-base'>
          BODY
          <br />
          RECORD
        </h3>
        <span className='font-normal text-xl text-white ml-5'>
          {moment(bodyRecordDataChart.date, 'YYYY-MM-DD').format('YYYY.MM.DD')}
        </span>
      </div>
      <div className='h-[250px] mx-6'>
        <LineChart data={bodyRecordDataChart.chart} />
      </div>
      <div className='ml-6 flex mt-6'>
        {bodyRecordType.map((item, index) => (
          <button
            key={index}
            className={clsx('w-14 h-6 rounded-full mr-4', {
              'bg-ha-primary-300': item.type === bodyRecordDataChart.type,
              'bg-white': item.type !== bodyRecordDataChart.type,
            })}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BodyRecordChart;
