import React, { useContext } from 'react';
import SliderContext from '../SliderContext';
import ImageTitle from './ImageTitle';

const SlidesList: React.FC = () => {
  const { currentSlideNumber, items } = useContext(SliderContext);
  return (
    <div className="slide-list" style={{ transform: `translateX(-${currentSlideNumber * 100}%)` }}>
      {items.map((slide) => (
        <ImageTitle key={slide.title} img={slide.img} title={slide.title} />
      ))}
    </div>
  );
};

export default SlidesList;
