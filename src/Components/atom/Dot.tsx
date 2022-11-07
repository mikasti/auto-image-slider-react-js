import React, { useContext } from 'react';
import SliderContext from '../SliderContext';
import '../../Assets/CSS/dot.scss';

interface IProps {
  dotNumber: number,
}

const Dot: React.FC<IProps> = ({ dotNumber }) => {
  const { currentSlideNumber, changeSlide } = useContext(SliderContext);
  return (
    <div
      className={`dot ${currentSlideNumber === dotNumber ? 'selected' : ''}`}
      onClick={() => changeSlide(dotNumber)}
    />
  );
};

export default Dot;
