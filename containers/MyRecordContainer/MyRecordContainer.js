import React from 'react';
import MyDiaryCard from '~/components/MyRecord/MyDiaryCard';
import Layout from '~/components/Layout';
import ButtonSeeMore from '~/components/ButtonSeeMore';
import { myDiaryData, myRecordButtonData } from '~/mocks';
import MyRecordButton from '~/components/MyRecord/MyRecordButton';
import BodyRecordChart from '~/components/MyRecord/BodyRecordChart';
import MyExercise from '~/components/MyRecord/MyExercise';

const MyRecordContainer = () => {
  return (
    <Layout>
      <div className='flex flex-wrap justify-center xl:px-40 md:px-20 px-1 mb-16'>
        <div className=' self-center w-full flex flex-wrap justify-between text-center sm:px-0 px-3'>
          {myRecordButtonData.map((item, index) => (
            <MyRecordButton key={index} {...item} />
          ))}
        </div>
        <div className='self-center w-full mt-14'>
          <BodyRecordChart />
        </div>
        <div className=' self-center w-full mt-14 bg-ha-dark-500 px-6 py-4'>
          <MyExercise />
        </div>
        <div className='self-center w-full mt-14 mb-8 bg-none '>
          <h2 className=' text-[22px] font-normal pb-1'>MY DIARY</h2>
          <div className=' w-full h-[474px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gr gap-3 overflow-hidden '>
            {myDiaryData.map((item, index) => (
              <MyDiaryCard key={index} {...item} />
            ))}
          </div>
        </div>
        <div className='flex justify-center'>
          <ButtonSeeMore name='自分の日記をもっと見る' />
        </div>
      </div>
    </Layout>
  );
};

export default MyRecordContainer;
