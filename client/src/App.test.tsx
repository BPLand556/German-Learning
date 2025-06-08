import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    // You can adjust the text below to match something visible in your App
    expect(screen.getByText(/learn/i)).toBeInTheDocument();
  });
}); 