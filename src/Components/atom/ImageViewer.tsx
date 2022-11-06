import React from 'react';
import { IImageTitle } from '../../Types/MainTypes';

const ImageViewer: React.FC<IImageTitle> = ({ img, title }) => (
  <img src={img} alt={title} className="slide-image" />
);

export default ImageViewer;
