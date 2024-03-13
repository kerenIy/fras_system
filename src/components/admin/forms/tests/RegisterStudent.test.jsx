import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StudentContext } from '../../../../context/StudentProvider';
import RegisterStudent from '../RegisterStudent';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

// Test case 1: Component renders correctly
describe('RegisterStudent', () => {
  test('renders RegisterStudent component', () => {
    render(<RegisterStudent />);
    expect(screen.getByPlaceholderText('e.g John Doe')).toBeInTheDocument();
    expect(screen.getByText('Register Student')).toBeInTheDocument();
  });

  // Test case 2: Input field updates
  test('updates input field on change', () => {
    render(<RegisterStudent />);
    const nameInput = screen.getByPlaceholderText('e.g John Doe');
    userEvent.type(nameInput, 'John Doe');
    expect(nameInput).toHaveValue('John Doe');
  });

  // Test case 3: Navigation to next stage
  test('navigates to next stage on form submission', async () => {
    render(
      <StudentContext.Provider value={{ setFormData: jest.fn() }}>
        <RegisterStudent />
      </StudentContext.Provider>
    );
    const nextButton = screen.getByText('Next');
    userEvent.click(nextButton);
    
    await waitFor(() => {
      expect(screen.queryByText('Register Student')).not.toBeInTheDocument();
      // Assuming WebcamCapture contains specific text/content to identify it
      expect(screen.getByText('Webcam Capture Component Identifier')).toBeInTheDocument();
    });
  });

});
