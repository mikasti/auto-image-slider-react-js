import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ImageSlider from '../Components/molecule/ImageSlider';

export default {
  title: 'ImageSlider',
  component: ImageSlider,
} as ComponentMeta<typeof ImageSlider>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ImageSlider> = (args) => <ImageSlider {...args} />;

export const AutoPlaySlider = Template.bind({});

AutoPlaySlider.args = {
  width: '80%',
  height: '100%',
  isAutoPlay: true,
  autoPlaySeconds: 5,
};
