import React, { createContext } from 'react';
import { ISliderContext } from '../Types/MainTypes';

const SliderContext: React.Context<ISliderContext> = createContext({
  changeSlide: (num) => console.log(num),
  currentSlideNumber: 0,
  items: [{ img: '', title: '' }],
});

export default SliderContext;
