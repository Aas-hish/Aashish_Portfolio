import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';
import PageWrapper from './PageWrapper';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
                <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
