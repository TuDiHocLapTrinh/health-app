import SvgIcon from '../SvgIcon';
import React from 'react';

const TransitionButton = ({ icon, title }) => {
  return (
    <div
      style={{
        backgroundImage: "url('images/hexagon.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='h-[134px] w-[116px] flex items-center justify-center flex-col text-white text-xl font-normal cursor-pointer'
    >
      <SvgIcon name={icon} />
      {title}
    </div>
  );
};

export default TransitionButton;
