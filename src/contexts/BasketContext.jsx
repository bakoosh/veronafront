import {createContext, useMemo, useState} from "react";


export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
    const [baskets, setBaskets] = useState('')


    const defaultProps = useMemo(() => ({
        baskets,
        setBaskets,
    }), [baskets])

    return (
        <BasketContext.Provider value={defaultProps}>
            {children}
        </BasketContext.Provider>
    );
};

export default BasketProvider;