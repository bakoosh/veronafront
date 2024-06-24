import {createContext, useMemo, useState} from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)


    const defaultProps = useMemo(() => ({
        isOpen,
        setIsOpen,
    }), [isOpen])

    return (
        <ModalContext.Provider value={defaultProps}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;