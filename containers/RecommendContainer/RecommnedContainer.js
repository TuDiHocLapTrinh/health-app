import React from 'react';
import Layout from '~/components/Layout';
import ButtonSeeMore from '~/components/ButtonSeeMore';
import { recommendButtonData, recommendData } from '~/mocks';
import RecommendButton from '~/components/Recommend/RecommendButton';
import RecommedPhoto from '~/components/Recommend/RecommendPhoto';

const RecommendContainer = () => {
  return (
    <Layout>
      <div className='flex flex-wrap justify-center w-full sm:px-40 px-16'>
        <div className=' self-center flex lg:w-[960px] mt-14 flex-wrap justify-between mb-14 '>
          {recommendButtonData.map((item, index) => (
            <RecommendButton {...item} key={index} />
          ))}
        </div>
        <div className=' self-center grid md:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-2'>
          {recommendData.map((item, index) => (
            <RecommedPhoto key={index} {...item} />
          ))}
        </div>
        <div className=' self-center mb-16'>
          <ButtonSeeMore name='コラムをもっと見る' />
        </div>
      </div>
    </Layout>
  );
};

export default RecommendContainer;
