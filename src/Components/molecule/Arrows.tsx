import React, { useCallback, useContext } from 'react';
import SliderContext from '../SliderContext';
import arrow from '../../Assets/Images/arrow.svg';
import '../../Assets/CSS/arrows.scss';

const Arrows: React.FC = () => {
  const { changeSlide } = useContext(SliderContext);

  const moveForward = useCallback(() => {
    changeSlide(-1);
  }, [changeSlide]);

  const moveBackward = useCallback(() => {
    changeSlide(1);
  }, [changeSlide]);

  return (
    <div className="arrows">
      <div onClick={moveForward}>
        <img className="arrow left" src={arrow} alt="arrow left" />
      </div>
      <div onClick={moveBackward}>
        <img className="arrow right" src={arrow} alt="arrow right" />
      </div>
    </div>
  );
};

export default Arrows;
