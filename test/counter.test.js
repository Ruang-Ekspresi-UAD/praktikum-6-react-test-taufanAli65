import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './counter';
import Display from './display';

describe('Counter Component', () => {
  test('Counter Default Value must be 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0');
  });

  test('increment works when button clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByTestId('increment-button'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
  });

  test('decrement works when button clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByTestId('decrement-button'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('-1');
  });
});

describe('Display Component', () => {
  test('display has correct value', () => {
    render(<Display value={10} />);
    expect(screen.getByTestId('display-value')).toHaveTextContent('Value: 10');
  });
});

