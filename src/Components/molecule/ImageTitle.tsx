import React from 'react';
import { IImageTitle } from '../../Types/MainTypes';
import ImageViewer from '../atom/ImageViewer';
import ImageText from '../atom/ImageText';

const ImageTitle: React.FC<IImageTitle> = ({ title, img }) => (
  <div className="slide">
    <ImageViewer img={img} title={title} />
    <ImageText title={title} />
  </div>
);

export default ImageTitle;
