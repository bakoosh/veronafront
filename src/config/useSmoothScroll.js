import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useSmoothScroll() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [location.pathname]);
}

export default useSmoothScroll;
