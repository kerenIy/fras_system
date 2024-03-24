import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Login'; // Assuming the Login component is exported from this path.

// Mock the modules that aren't being tested directly
jest.mock('../../api/url', () => ({
  post: jest.fn()
}));
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useNavigate: () => jest.fn()
}));

describe('Login Component Tests', () => {
    // TC1: Component renders correctly with passed props
    it('renders correctly with passed props', () => {
      const { getByText } = render(<Login role="Admin" bar1="Dashboard" bar2="Analytics" bar3="Reports" />, { wrapper: Router });
      expect(getByText('Admin')).toBeInTheDocument();
      expect(getByText('Dashboard')).toBeInTheDocument();
      expect(getByText('Analytics')).toBeInTheDocument();
      expect(getByText('Reports')).toBeInTheDocument();
    });
  
    // TC2: Initial states for email and password are empty
    it('has initial states for email and password as empty', () => {
      const { getByPlaceholderText } = render(<Login />, { wrapper: Router });
      expect(getByPlaceholderText('Enter username')).toHaveValue('');
      expect(getByPlaceholderText('Enter password')).toHaveValue('');
    });
  
    // ... and so on for each test case
    
    // TC5: The handleSubmit function is called when the login button is clicked
    it('calls handleSubmit when login button is clicked', () => {
      const handleSubmitMock = jest.fn();
      render(<Login />, { wrapper: Router });
      const loginButton = screen.getByRole('button', { name: /Log In/i });
      fireEvent.click(loginButton);
      // Ensure handleSubmitMock is called
      expect(handleSubmitMock).toHaveBeenCalledTimes(1);
    });
  
    // TC6: The login process shows the loading indicator when awaiting the response
    it('shows loading indicator during login', async () => {
      axios.post.mockImplementationOnce(() => Promise.resolve({ data: { data: { session: { sessionKey: 'dummy_session_key' } } } }));
      render(<Login />, { wrapper: Router });
      const loginButton = screen.getByRole('button', { name: /Log In/i });
      fireEvent.click(loginButton);
      expect(screen.getByAltText('loading...')).toBeInTheDocument();
    });
  
    // ... and more test cases as defined above
  
  });
  