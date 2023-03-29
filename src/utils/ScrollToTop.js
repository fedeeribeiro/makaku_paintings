import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../context/Context.js';

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const { showAlert } = useContext(Context);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [pathname, showAlert]);

    return null;
}