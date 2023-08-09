import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    
        if (storedUserLoggedInInformation === '1') {
          setIsLoggedIn(true);
        }
      }, [])

    const logoutHandler = () => {
        // 브라우저에 내장되있는 함수. 
        // a global object which is available in the browser
        localStorage.setItem('isLoggedIn', '1'); // 1 : logged in 0: not logged in
        setIsLoggedIn(false);
    };

    const loginHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(true);
    };

    return (
    <AuthContext.Provider
        value={{ 
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler,
        }}
    >
        {props.children}
    </AuthContext.Provider>);
}

export default AuthContext;