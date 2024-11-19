import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

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

  test('reset the count using reset button', () => {
    render(<Counter />);
    fireEvent.click(screen.getByTestId('increment-button'));
    fireEvent.click(screen.getByTestId('reset-button'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0');
  });
});

describe('Greeting Component', () => {
  test('greeting component {nama kalian}', () => {
    render(<Greeting name="Taufan" />);
    expect(screen.getByTestId('greeting')).toHaveTextContent('Hello, Taufan');
  });

  test('greeting component {nama dosen kalian}', () => {
    render(<Greeting name="Dosen" />);
    expect(screen.getByTestId('greeting')).toHaveTextContent('Hello, Dosen');
  });
});

describe('AlertButton Component', () => {
  test('triggers alert with correct message when clicked', () => {
    window.alert = jest.fn();
    render(<AlertButton message="Test Alert" />);
    fireEvent.click(screen.getByTestId('alert-button'));
    expect(window.alert).toHaveBeenCalledWith('Test Alert');
  });
});

