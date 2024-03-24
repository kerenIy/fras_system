import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CaptureAttendance from './CaptureAttendance';
import axios from 'axios';
import { SessionContext } from '../../../context/SessionProvider';
import { useClass } from '../../../context/ClassProvider';
import { success, failure } from '../../../classes/Notifications';

jest.mock('axios');
jest.mock('react-webcam');
jest.mock('../../../context/SessionProvider', () => ({
  useSession: jest.fn(),
}));
jest.mock('../../../context/ClassProvider', () => ({
  useClass: jest.fn(),
}));
jest.mock('../../../classes/Notifications', () => ({
  success: jest.fn(),
  failure: jest.fn(),
}));

const mockSessionContextValue = {
  token: 'dummy_token',
};

const mockClassContextValue = {
  classID: 'dummy_class_id',
};

describe('CaptureAttendance Component', () => {
  beforeEach(() => {
    useClass.mockImplementation(() => mockClassContextValue);
    // Mock the useContext to return the mockSessionContextValue
    useSession.mockImplementation(() => mockSessionContextValue);
  });

  it('renders the webcam and button correctly', () => {
    render(<CaptureAttendance />);
    expect(screen.getByText('Capture image')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Capture Attendance' })).toBeInTheDocument();
  });

  it('captures an image on clicking "Capture image"', async () => {
    const { getByText } = render(<CaptureAttendance />);
    const captureButton = getByText('Capture image');
    fireEvent.click(captureButton);

    await waitFor(() => {
      expect(success).toHaveBeenCalledWith('Image Taken');
    });
  });

  it('updates matric number state correctly', () => {
    const { getByPlaceholderText } = render(<CaptureAttendance />);
    const matricInput = getByPlaceholderText('e.g 20/1223');
    fireEvent.change(matricInput, { target: { value: '20/1234' } });
    expect(matricInput.value).toBe('20/1234');
  });

  it('sends correct data on form submission', async () => {
    axios.post.mockResolvedValue({ data: 'Attendance Captured Successfully' });
    const { getByRole } = render(<CaptureAttendance />);
    const captureAttendanceButton = getByRole('button', { name: 'Capture Attendance' });
    fireEvent.click(captureAttendanceButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(expect.any(String), expect.any(Object), {
        headers: expect.any(Object),
        withCredentials: true,
      });
    });
  });

  it('displays success notification on successful API call', async () => {
    axios.post.mockResolvedValue({ data: 'Attendance Captured Successfully' });
    const { getByRole } = render(<CaptureAttendance />);
    const captureAttendanceButton = getByRole('button', { name: 'Capture Attendance' });
    fireEvent.click(captureAttendanceButton);

    await waitFor(() => {
      expect(success).toHaveBeenCalledWith('Attendance Captured Successfully');
    });
  });

  it('displays failure notification on failed API call', async () => {
    axios.post.mockRejectedValue(new Error('Failed to Capture Attendance'));
    const { getByRole } = render(<CaptureAttendance />);
    const captureAttendanceButton = getByRole('button', { name: 'Capture Attendance' });
    fireEvent.click(captureAttendanceButton);

    await waitFor(() => {
      expect(failure).toHaveBeenCalledWith('Failed to Capture Attendance');
    });
  });
});
