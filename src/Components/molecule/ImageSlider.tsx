import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { IImageTitle } from '../../Types/MainTypes';
import SliderContext from '../SliderContext';
import SlidesList from './SlideList';
import Arrows from './Arrows';
import '../../Assets/CSS/slider.scss';
import bubbles from '../../Assets/Images/pete-godfrey-AuqCFgIy2rY-unsplash.jpg';
import car from '../../Assets/Images/stefan-rodriguez-2AovfzYV3rc-unsplash.jpg';
import sky from '../../Assets/Images/philip-myrtorp-l_28PjLuiuA-unsplash.jpg';

interface IProps {
  width: string,
  height: string,
  isAutoPlay?: boolean,
  autoPlaySeconds?: number,
}

const ImageSlider: React.FC<IProps> = ({
  width, height, isAutoPlay, autoPlaySeconds = 3,
}) => {
  const [items, setItems] = useState<IImageTitle[]>([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    setItems([
      { img: car, title: 'Cool Chevy' },
      { img: bubbles, title: 'Four bubbles' },
      { img: sky, title: 'Night sky' }]);
  }, []);

  const changeSlide = useCallback((direction = 1) => {
    let slideNumber = 0;
    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }
    setSlide(slideNumber);
  }, [items, slide]);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlaySeconds * 1000);

    // eslint-disable-next-line consistent-return
    return () => {
      clearInterval(interval);
    };
  }, [isAutoPlay, autoPlaySeconds, changeSlide]);

  const SliderContextWrapper = useMemo(() => ({
    changeSlide,
    currentSlideNumber: slide,
    items,
  }), [changeSlide, items, slide]);

  return (
    <div style={{ width, height }} className="slider">
      <SliderContext.Provider value={SliderContextWrapper}>
        <Arrows />
        <SlidesList />
      </SliderContext.Provider>
    </div>
  );
};

export default ImageSlider;
