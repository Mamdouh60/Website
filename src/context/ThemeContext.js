import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

const themes = {
    blue: {
        '--primary-color': '#2196f3',
        '--primary-dark': '#1976d2',
        '--primary-light': '#bbdefb',
        '--bg-color': '#ffffff',
        '--text-color': '#333333',
        '--text-light': '#666666',
        '--shadow-color': 'rgba(0, 0, 0, 0.1)',
        '--card-bg': '#ffffff',
        '--border-color': '#e0e0e0'
    },
    purple: {
        '--primary-color': '#9c27b0',
        '--primary-dark': '#7b1fa2',
        '--primary-light': '#e1bee7',
        '--bg-color': '#ffffff',
        '--text-color': '#333333',
        '--text-light': '#666666',
        '--shadow-color': 'rgba(0, 0, 0, 0.1)',
        '--card-bg': '#ffffff',
        '--border-color': '#e0e0e0'
    }
};

const darkThemes = {
    blue: {
        '--primary-color': '#64b5f6',
        '--primary-dark': '#42a5f5',
        '--primary-light': '#e3f2fd',
        '--bg-color': '#121212',
        '--text-color': '#ffffff',
        '--text-light': '#b0b0b0',
        '--shadow-color': 'rgba(0, 0, 0, 0.3)',
        '--card-bg': '#1e1e1e',
        '--border-color': '#333333'
    },
    purple: {
        '--primary-color': '#ba68c8',
        '--primary-dark': '#ab47bc',
        '--primary-light': '#f3e5f5',
        '--bg-color': '#121212',
        '--text-color': '#ffffff',
        '--text-light': '#b0b0b0',
        '--shadow-color': 'rgba(0, 0, 0, 0.3)',
        '--card-bg': '#1e1e1e',
        '--border-color': '#333333'
    }
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'blue';
    });

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode === 'true';
    });

    useEffect(() => {
        const root = document.documentElement;
        const currentTheme = isDarkMode ? darkThemes[theme] : themes[theme];

        Object.entries(currentTheme).forEach(([property, value]) => {
            root.style.setProperty(property, value);
        });

        localStorage.setItem('theme', theme);
    }, [theme, isDarkMode]);

    const toggleTheme = (newTheme) => {
        if (newTheme === 'blue' || newTheme === 'purple') {
            setTheme(newTheme);
        }
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const value = {
        theme,
        toggleTheme,
        isDarkMode,
        toggleDarkMode
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}; 