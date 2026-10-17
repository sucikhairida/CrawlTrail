// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CrawlTrail title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CrawlTrail/i);
    expect(titleElement).toBeInTheDocument();
});
