import { createContext, useState } from "react";

export const StudentContext = createContext({
    formData: {},
    setFormData: () => { }
});

export const StudentProvider = ({children}) => {
    const [formData, setFormData] = useState({});

    return (
        <StudentContext.Provider value={{formData, setFormData}}>
            {children}
        </StudentContext.Provider>
    )
}