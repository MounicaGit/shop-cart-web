import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    }, [])

    const signUp = (userData) => {
        try {
            localStorage.setItem("registeredUser", JSON.stringify(userData));
            return true
        }
        catch (e) {
            return false;
        }
    }

    const login = (email, password) => {
        const registeredUser = JSON.parse(localStorage.getItem("registeredUser"))
        if (registeredUser && registeredUser.email == email && registeredUser.password == password) {
            localStorage.setItem("user", JSON.stringify(registeredUser))
            setUser(registeredUser)
            return true;
        }
        return false;
    }

    const logout = () => {
        localStorage.removeItem("user")
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{ user, signUp, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)