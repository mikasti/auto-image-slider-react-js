import React, { useContext } from 'react';
import SliderContext from '../SliderContext';
import Dot from '../atom/Dot';

const Dots: React.FC = () => {
  const { items } = useContext(SliderContext);
  const dots = items.map((item, index) => <Dot key={item.title} dotNumber={index} />);
  return (
    <div className="dots">
      {dots}
    </div>
  );
};

export default Dots;
