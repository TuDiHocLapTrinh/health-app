import React from 'react';
import ButtonSeeMore from '~/components/ButtonSeeMore';
import BodyScoreGraph from '~/components/Home/BodyScoreGraph';
import DailyAchievement from '~/components/Home/DailyAchievement';
import MealHistory from '~/components/Home/MealHistory';
import Layout from '~/components/Layout';
import TransitionButton from '~/components/TransitionButton';
import { mealHistoryData, transitionButtonData } from '~/mocks';

const HomeContainer = () => {
  return (
    <Layout>
      <div className='w-full flex flex-col md:flex-row'>
        <DailyAchievement />
        <BodyScoreGraph />
      </div>
      <div className='w-full xl:px-[160px] px-4 mt-6 mb-16'>
        <div className='flex justify-center flex-wrap'>
          {transitionButtonData.map((item, index) => (
            <div key={index} className='xl:mx-[42px] md:mx-4 mx-2'>
              <TransitionButton {...item} />
            </div>
          ))}
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-6 mb-7'>
          {mealHistoryData.map((item, index) => (
            <MealHistory key={index} {...item} />
          ))}
        </div>
        <div className='flex justify-center'>
          <ButtonSeeMore name='記録をもっと見る' />
        </div>
      </div>
    </Layout>
  );
};

export default HomeContainer;
