import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => { } });

const lightTheme = {
    titleColor: '#232E3B',
    textColor: '#626F7F',
    thoughtTitle: '#ffa7c4',
    backgroundColor: '#FFF'
}
const darkTheme = {
    titleColor: '#FFF',
    thoughtTitle: '#ffa7c4',
    textColor: '#626F7F',
    backgroundColor: 'rgb(30, 34, 56)'
}

export function ThemeContextProvider({ children }) {
    const toggleTheme = () => {
        const toSet = theme === 'light' ? 'dark' : 'light';
        window.localStorage.setItem('theme', toSet);
        setTheme(toSet);
    }
    const [theme, setTheme] = useState('');

    useEffect(() => {
        const theme = localStorage.getItem('theme') || 'dark';
        setTheme(theme);
    }, []);

    return (
        theme &&
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    return useContext(ThemeContext);
}
