import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({theme: 'light', toggleTheme: () => {} });

export function ThemeProvider({ children }) {
    const toggleTheme = () => {
        const toSet = theme === 'light' ? 'dark' : 'light';
        window.localStorage.setItem('theme', toSet);
        setTheme(toSet);
    }
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const theme = localStorage.getItem('theme') || 'light';
        setTheme(theme);
    }, []);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            { children}
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    return useContext(ThemeContext);
}
