import React from 'react';
import ImageSlider from './Components/molecule/ImageSlider';
import './Assets/CSS/main.scss';

const App:React.FC = () => {
  const slider = <ImageSlider width="80%" height="100%" isAutoPlay autoPlaySeconds={5} />;
  return (
    <div className="main">
      {slider}
    </div>
  );
};

export default App;
