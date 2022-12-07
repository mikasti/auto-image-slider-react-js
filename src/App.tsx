/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import ImageSlider from './Components/molecule/ImageSlider';
import './Assets/CSS/main.scss';

const App:React.FC = () => {
  const slider = <ImageSlider width="80%" height="100%" isAutoPlay={false} autoPlaySeconds={5} />;
  return (
    <div className="main">
      {slider}
    </div>
  );
};

export default App;
