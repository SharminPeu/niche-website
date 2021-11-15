import { render, screen } from '@testing-library/react';
import APP from './APP';
// import App from './App';

test('renders learn react link', () => {
  render(<APP />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
