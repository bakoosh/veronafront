import {createContext, useMemo, useState} from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState('')


    const defaultProps = useMemo(() => ({
        searchValue,
        setSearchValue,
    }), [searchValue])

    return (
        <SearchContext.Provider value={defaultProps}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;