import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ContextProvider from './context/Context.js';
import NavBar from './components/Navbar.js';
import Footer from './components/Footer.js';
import CuadrosContainer from './components/CuadrosContainer.js';
import IlustracionesContainer from './components/IlustracionesContainer.js';
import HomeContainer from './components/HomeContainer.js';
import ScrollToTop from './utils/ScrollToTop.js';
import PageState from './utils/PageState.js';
import FormAlertGroup from './components/styledComponents/FormAlertGroup.js';

const App = () => {
    return (
        <main>
            <ContextProvider>
                <BrowserRouter>
                    <ScrollToTop />
                    <PageState />
                    <FormAlertGroup />
                    <NavBar />
                    <Content />
                    <Footer />
                </BrowserRouter>
            </ContextProvider>
        </main>
    )
}

const Content = () => {
    const location = useLocation();

    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState("fadeIn");

    useEffect(() => {
        if (location !== displayLocation) setTransistionStage("fadeOut");
    }, [location, displayLocation]);
    return (
        <main className={`${transitionStage}`} onAnimationEnd={() => {
            if (transitionStage === "fadeOut") {
                setTransistionStage("fadeIn");
                setDisplayLocation(location);
            }
        }}>
            <Routes location={ displayLocation }>
                <Route path='/' element={ <HomeContainer /> } />
                <Route path='/home' element={ <HomeContainer /> } />
                <Route path='/cuadros' element={ <CuadrosContainer /> } />
                <Route path='/ilustraciones' element={ <IlustracionesContainer /> } />
            </Routes>
        </main>
    )
}

export default App;