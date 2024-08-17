"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface NavDrawerContextProps {
    isNavDrawerOpen: boolean;
    toggleNavDrawer: () => void;
}

const NavDrawerContext = createContext<NavDrawerContextProps | undefined>(undefined);

const NavDrawerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isNavDrawerOpen, setNavDrawerOpen] = useState(true);

    const toggleNavDrawer = () => {
        setNavDrawerOpen((prev) => !prev);
    };

    return (
        <NavDrawerContext.Provider value={{ isNavDrawerOpen, toggleNavDrawer }}>
            {children}
        </NavDrawerContext.Provider>
    );
};

const useNavDrawer = () => {
    const context = useContext(NavDrawerContext);
    if (!context) {
        throw new Error('useNavDrawer must be used within a NavDrawerProvider');
    }
    return context;
};

export { NavDrawerProvider, useNavDrawer };