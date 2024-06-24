import {createContext, useMemo, useState} from "react";


export const CityContext = createContext();

const CityProvider = ({ children }) => {
    const [city, setCity] = useState('')


    const defaultProps = useMemo(() => ({
        city,
        setCity,
    }), [city])

    return (
        <CityContext.Provider value={defaultProps}>
            {children}
        </CityContext.Provider>
    );
};

export default CityProvider;