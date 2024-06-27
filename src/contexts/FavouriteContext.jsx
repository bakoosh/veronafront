import {createContext, useMemo, useState} from "react";


export const FavouriteContext = createContext();

const FavouriteProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([])


    const defaultProps = useMemo(() => ({
        favourites,
        setFavourites,
    }), [favourites])

    return (
        <FavouriteContext.Provider value={defaultProps}>
            {children}
        </FavouriteContext.Provider>
    );
};

export default FavouriteProvider;