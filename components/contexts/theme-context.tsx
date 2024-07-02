'use client'
import { ReactNode, createContext, useState } from "react";
type ThemeContextType = {
    dark: boolean;
    setDark: (dark: boolean) => void;
};
const defaultValue = {
    dark: false,
    setDark: () => {},
};

export const themeContext = createContext<ThemeContextType>(defaultValue);

const ThemeContext =({children}:{children: ReactNode}) =>{
    const [dark, setDark] = useState(false);
    return(
        <themeContext.Provider value={{dark, setDark}}>
            {children}
        </themeContext.Provider>
    );
};

export default ThemeContext;