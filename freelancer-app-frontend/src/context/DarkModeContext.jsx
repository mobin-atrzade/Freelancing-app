import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [isdarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

    useEffect(() => {
        if (isdarkMode) {
            document.documentElement.classList.add("dark-mode");
            document.documentElement.classList.remove("light-mode");
        } else {
            document.documentElement.classList.add("light-mode");
            document.documentElement.classList.remove("dark-mode");
        }
    }, [isdarkMode])

    return <DarkModeContext.Provider value={{ isdarkMode, toggleDarkMode }}>
        {children}
    </DarkModeContext.Provider>
}


export function useDarkMode() {
    const context = useContext(DarkModeContext);

    if (context === undefined) {
        throw new Error("DarkModeContext was used outside of DarkModeProvider");
    }
    return context;
}