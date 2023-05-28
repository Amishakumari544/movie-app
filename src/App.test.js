// Import the necessary dependencies
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './components/header/Header';

// Test suite for the Header component
describe('Header', () => {
  // Test case to check if the search function is called correctly
  it('should call the search function with the entered query', () => {
    // Mock the search function
    const mockSearchFunction = jest.fn();

    // Render the Header component
    const { getByPlaceholderText } = render(
      <Header onSearch={mockSearchFunction} />
    );

    // Get the input field and enter a query
    const input = getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'example query' } });

    // Check if the search function is called with the correct query
    expect(mockSearchFunction).toHaveBeenCalledWith('example query');
  });
});
