import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewClass from './NewClass';
import axios from 'axios';
import { SessionContext } from '../../../context/SessionProvider';

jest.mock('axios');
jest.mock('../../../classes/Notifications', () => ({
  success: jest.fn(),
  failure: jest.fn(),
}));

// Mock SessionContext if needed
const mockSessionContext = {
  token: 'mock_token',
};

describe('NewClass Component', () => {
  // TC1: Component renders all input fields and the button
  it('renders all input fields and the button', () => {
    render(
      <SessionContext.Provider value={mockSessionContext}>
        <NewClass />
      </SessionContext.Provider>
    );

    // Assert that all fields and button are rendered
    expect(screen.getByPlaceholderText('e.g SENG 412')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('e.g Software Quality and Testing')).toBeInTheDocument();
    // Add assertions for other fields and button
  });

  // TC2: Input fields are initially empty
  it('input fields are initially empty', () => {
    // Render the component inside the context provider and check input fields
  });

  // ... other test cases ...

  // TC7: Clicking the 'Create Class' button triggers the handleSubmit function
  it('clicks the create class button and triggers handleSubmit', async () => {
    axios.post.mockResolvedValue({}); // Mock the axios post to resolve with an empty object

    render(
      <SessionContext.Provider value={mockSessionContext}>
        <NewClass />
      </SessionContext.Provider>
    );

    fireEvent.click(screen.getByText('Create Class'));
    // Assert the axios post was called
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(expect.any(String), expect.any(Object), expect.any(Object));
    });
  });

  // TC9: On successful API call, the success notification is displayed
  it('displays success notification on successful API call', async () => {
    axios.post.mockResolvedValue({ data: {} }); // Mock a successful response

    render(
      <SessionContext.Provider value={mockSessionContext}>
        <NewClass />
      </SessionContext.Provider>
    );

    fireEvent.click(screen.getByText('Create Class'));

    await waitFor(() => {
      expect(success).toHaveBeenCalledWith('Class Created');
    });
  });

  // TC10: On failed API call, the failure notification is displayed
  it('displays failure notification on failed API call', async () => {
    axios.post.mockRejectedValue(new Error('Failed to Create Class')); // Mock a failure response

    render(
      <SessionContext.Provider value={mockSessionContext}>
        <NewClass />
      </SessionContext.Provider>
    );

    fireEvent.click(screen.getByText('Create Class'));

    await waitFor(() => {
      expect(failure).toHaveBeenCalledWith('Failed to Create Class');
    });
  });

  // ... additional test cases ...
});
