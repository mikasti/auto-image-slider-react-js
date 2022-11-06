import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import Arrows from '../Components/molecule/Arrows';
import ImageTitle from '../Components/molecule/ImageTitle';

const defaultFunction = () => console.log('test');

describe('Render App', () => {
  it('App renders correctly', () => {
    const Component = render(<App />);
    expect(Component).toMatchSnapshot();
  });
});

describe('Render <Molecules>', () => {
  it('Arrows renders correctly', () => {
    const Component = render(<Arrows />);
    expect(Component).toMatchSnapshot();
  });
  it('Render Arrows and check it', () => {
    render(
      <Arrows />,
    );
    const leftArrow = screen.getByAltText('arrow left');
    const rightArrow = screen.getByAltText('arrow right');
    expect(leftArrow && rightArrow).toBeInTheDocument();
  });
  it('Render ImageTitle', () => {
    render(
      <ImageTitle title="Test title" img="some img" />,
    );
    const image = screen.getByAltText('Test title');
    const title = screen.queryByText('Test title');
    expect(image && title).toBeInTheDocument();
  });
});
