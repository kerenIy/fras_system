
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context
export const ClassContext = createContext({
    classID: "",
    setClassID: () => 0
});

// Provider component
export const ClassProvider = ({ children }) => {
  const [classID, setClassID] = useState(null);

  // Load Class from localStorage when the component mounts
//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       setToken(storedToken);
//     }
//   }, []);

//   // Save token to localStorage whenever it changes
//   useEffect(() => {
//     if (token) {
//       localStorage.setItem('token', token);
//     }
//   }, [token]);

  // Remove token from localStorage
//   const logout = () => {
//     setToken(null);
//     localStorage.removeItem('token');
//   };

  return (
    <ClassContext.Provider value={{ classID, setClassID 
        // logout 
    }}>
      {children}
    </ClassContext.Provider>
  );
};

// Hook to use the token context
export const useClass = () => useContext(ClassContext);