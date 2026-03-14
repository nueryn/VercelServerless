// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders VercelServerless title', () => {
    render(<App />);
    const titleElement = screen.getByText(/VercelServerless/i);
    expect(titleElement).toBeInTheDocument();
});
