import { createContext, useContext, useState } from "react";

const Context = createContext();

export const useAuth = () => useContext(Context);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signIn = async() =>{
        setUser({
            attributes: {
                fullName: 'John Do'
            }
        });
    }

    const value = {
        user,
        signIn
    };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};