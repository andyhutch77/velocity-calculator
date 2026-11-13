import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the velocity generator and its default calculation', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /velocity generator/i })).toBeInTheDocument();
  expect(screen.getByText(/total = 7\.5 story points/i)).toBeInTheDocument();
});
