import React from 'react';
import { Header } from './Header';

export const YellowBorder = (props) => { 
  return (
    <div className={'HeaderBorder HeaderBorder-yellow' + props.color}> {/* Ubah HeaderBorder- menjadi HeaderBorder- + props.color */}
      {props.children}
    </div>
  );
};
