import {createContext, useMemo, useState} from "react";


export const AuthUserContext = createContext();

const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState()


    const defaultProps = useMemo(() => ({
        authUser,
        setAuthUser,
    }), [authUser])

    return (
        <AuthUserContext.Provider value={defaultProps}>
            {children}
        </AuthUserContext.Provider>
    );
};

export default AuthProvider;