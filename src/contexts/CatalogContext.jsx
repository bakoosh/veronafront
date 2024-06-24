import {createContext, useMemo, useState} from "react";

export const CatalogContext = createContext();

const CatalogProvider = ({ children }) => {
    const [isOpenCatalog, setIsOpenCatalog] = useState(false)
    const [catalogId, setCatalogId] = useState()


    const defaultProps = useMemo(() => ({
        isOpenCatalog,
        setIsOpenCatalog,
        catalogId,
        setCatalogId,
    }), [isOpenCatalog, catalogId])

    return (
        <CatalogContext.Provider value={defaultProps}>
            {children}
        </CatalogContext.Provider>
    );
};

export default CatalogProvider;