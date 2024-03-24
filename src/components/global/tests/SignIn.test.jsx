import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';

// Mocking the necessary modules and components
jest.mock('axios');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));
jest.mock('../../context/AuthProvider');
jest.mock('../../context/SessionProvider');
jest.mock('../../classes/Notifications', () => ({
  success: jest.fn(),
  failure: jest.fn(),
}));
jest.mock('../../api/url'); // Assuming axios is exported from here as default

const mockedNavigate = useNavigate();

describe('Login Component', () => {
    it('renders with the correct props', () => {
      const role = 'Admin Role';
      const { getByText } = render(<Login role={role} bar1="Dashboard" bar2="Analytics" bar3="Reports" />, { wrapper: BrowserRouter });
      expect(getByText(role)).toBeInTheDocument();
      expect(getByText('Dashboard')).toBeInTheDocument();
      // Add checks for other props
    });
  
    it('starts with empty input fields', () => {
      const { getByPlaceholderText } = render(<Login />, { wrapper: BrowserRouter });
      expect(getByPlaceholderText('Enter username')).toHaveValue('');
      expect(getByPlaceholderText('Enter password')).toHaveValue('');
    });
  
    it('updates state on user input', () => {
      const { getByPlaceholderText } = render(<Login />, { wrapper: BrowserRouter });
      const usernameInput = getByPlaceholderText('Enter username');
      fireEvent.change(usernameInput, { target: { value: 'testuser' } });
      expect(usernameInput).toHaveValue('testuser');
      // Repeat for password input
    });
  
    // ... etc
  
    it('handles successful login', async () => {
      axios.post.mockResolvedValue({
        data: {
          data: {
            session: {
              sessionKey: 'dummy_session_key',
            },
          },
        },
      });
  
      const { getByText } = render(<Login />, { wrapper: BrowserRouter });
      const loginButton = getByText('Log In');
      fireEvent.click(loginButton);
  
      await waitFor(() => {
        expect(mockedNavigate).toHaveBeenCalledWith('/lecturer/home');
        expect(success).toHaveBeenCalledWith('Login Successful');
        // Check if the context's setAuth and setToken were called appropriately
      });
    });
  
    it('handles failed login', async () => {
      axios.post.mockRejectedValue({
        message: 'Request failed with status code 400',
      });
  
      const { getByText } = render(<Login />, { wrapper: BrowserRouter });
      const loginButton = getByText('Log In');
      fireEvent.click(loginButton);
  
      await waitFor(() => {
        expect(failure).toHaveBeenCalledWith('Invalid Username or Password');
      });
    });
  
    // ... etc
  
  });
  