import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../context/Context.js';

export default function PageState() {
    const { pathname } = useLocation();
    const { setPage } = useContext(Context);

    useEffect(() => {
        if (pathname.includes('ilustraciones')) {
            setPage(1);
        } else if (pathname.includes('cuadros')) {
            setPage(2);
        } else {
            setPage(0);
        }
    }, [pathname, setPage]);
}