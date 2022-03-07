import React, { useState, useEffect } from "react";

const AuthContext = React.createContext ({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        const storeUserLoginInformation = localStorage.getItem('is_LoggedIn');
        if(storeUserLoginInformation === '1'){
          setIsLoggedIn(true);
        }
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem('is_LoggedIn');
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
        localStorage.setItem('is_LoggedIn', '1');
        setIsLoggedIn(true);
    }

    return (
        <AuthContext.Provider 
            value={{
                isLoggedIn: isLoggedIn,
                onLogout:logoutHandler,
                onLogin: loginHandler
            }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;