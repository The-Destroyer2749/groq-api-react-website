import React from 'react';
import { render, screen } from '@testing-library/react';
import {Main} from './homepage';

test('renders learn react link', () => {
  render(<Main />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
