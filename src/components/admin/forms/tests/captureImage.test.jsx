import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WebcamCapture from '../captureImage'; 
import { StudentContext } from '../../../../context/StudentProvider';
import { SessionContext } from '../../../../context/SessionProvider';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

jest.mock('react-webcam', () => () => 'Webcam');
const mockAxios = new MockAdapter(axios);
const mockStudentContextValue = { formData: {} };
const mockSessionContextValue = { token: 'dummy_token' };

describe('WebcamCapture', () => {
  beforeEach(() => {
    render(
      <StudentContext.Provider value={mockStudentContextValue}>
        <SessionContext.Provider value={mockSessionContextValue}>
          <WebcamCapture student={{}} />
        </SessionContext.Provider>
      </StudentContext.Provider>
    );
  });

  test('initial direction is displayed correctly', () => {
    expect(screen.getByText('Place face at the center')).toBeInTheDocument();
  });

  test('direction updates on capture', () => {
    const captureButton = screen.getByText('Capture image');
    userEvent.click(captureButton);
    expect(screen.getByText('Move face to the left')).toBeInTheDocument();
  });

  test('submit button is disabled until completion', () => {
    const submitButton = screen.getByText('Submit');
    expect(submitButton).toHaveClass('not-complete-btn'); // Assuming this class makes the button look disabled
    fireEvent.click(screen.getByText('Capture image')); // Simulate capturing all images
    fireEvent.click(screen.getByText('Capture image'));
    fireEvent.click(screen.getByText('Capture image'));
    fireEvent.click(screen.getByText('Capture image'));
    expect(submitButton).not.toHaveClass('not-complete-btn'); // Assuming a class change or different element for an enabled button
  });

  test('form submission with axios', async () => {
    const successMessage = 'Student Registered Successfully';
    mockAxios.onPost('/Admin/RegisterStudent').reply(200, {
      data: successMessage,
    });

    const submitButton = screen.getByText('Submit');
    // Simulate the actions to enable the submit button as needed
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(mockAxios.history.post.length).toBe(1);
      expect(screen.getByText(successMessage)).toBeInTheDocument();
    });
  });
});
