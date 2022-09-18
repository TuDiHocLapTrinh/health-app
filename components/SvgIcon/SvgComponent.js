import {
  Arrow,
  Challenge,
  Close,
  Cup,
  Dot,
  Info,
  Knife,
  Memo,
  Menu,
} from './Icons';
import React from 'react';

const SvgComponent = ({ className, name = 'default' }) => {
  let SvgComp;

  switch (name) {
    case 'memo':
      SvgComp = Memo;
      break;
    case 'challenge':
      SvgComp = Challenge;
      break;
    case 'info':
      SvgComp = Info;
      break;
    case 'knife':
      SvgComp = Knife;
      break;
    case 'cup':
      SvgComp = Cup;
      break;
    case 'close':
      SvgComp = Close;
      break;
    case 'arrow':
      SvgComp = Arrow;
      break;
    case 'dot':
      SvgComp = Dot;
      break;

    default:
      SvgComp = Menu;
      break;
  }

  return <SvgComp className={className} />;
};

export default SvgComponent;
