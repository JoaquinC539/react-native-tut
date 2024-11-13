import { colors, darkTheme, lightTheme } from "@/constants/Theme";
import { createContext, FC, ReactNode, useContext } from "react";
import { useColorScheme } from "react-native"

const ThemeContext = createContext({
    theme: darkTheme,
    colors: colors.dark
});

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const colorScheme = useColorScheme();
    const theme = colorScheme === "dark" ? darkTheme : lightTheme;
    const themeColors = colorScheme === "dark" ? colors.dark : colors.light;
    return (
        <ThemeContext.Provider value={{ theme, colors: themeColors }}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used witin a ThemeProvider");
    }
    return context;
}

