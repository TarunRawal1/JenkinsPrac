import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('renders welcome message and prompt', () => {
  render(<App />);
  expect(screen.getByText(/Welcome to the Store/i)).toBeInTheDocument();
  expect(screen.getByText(/What are you looking for\?/i)).toBeInTheDocument();
});