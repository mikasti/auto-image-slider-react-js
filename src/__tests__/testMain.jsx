import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from "../App";


const defaultFunction = () => console.log('test');

describe('Articles rendering', () => {
  it('renders correctly', () => {
    const Component = render(
      <App />
    );
    expect(Component).toMatchSnapshot();
  });
  it('Render Articles and check title', () => {
    render(
        <App />,
    );
    const inputNode = screen.queryByText('Hello, world!');
    console.log('Articles', inputNode);
    expect(inputNode).toBeInTheDocument();
  });
});

