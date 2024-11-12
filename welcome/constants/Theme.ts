import { StyleSheet } from "react-native"

const lightColors = {
    background: '#ffffff',
    text: '#333333',
    primary: '#6200EE'
}
const darkColors = {
    background: '#333333',
    text: '#ffffff',
    primary: '#BB86FC',
}

const boxStyle = {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, 
  };

export const lightTheme = StyleSheet.create({
    container: {
        backgroundColor: lightColors.background
    },
    text: {
        color: lightColors.text
    },
    primaryText: {
        color: lightColors.primary,
    },
    box:{
        ...boxStyle,
        backgroundColor:lightColors.background
    }
})
export const darkTheme = StyleSheet.create({
    container: {
        backgroundColor: darkColors.background,
    },
    text: {
        color: darkColors.text,
    },
    primaryText: {
        color: darkColors.primary,
    },    
    box:{
        ...boxStyle,
        backgroundColor:darkColors.background
    }
});

export const colors = { light: lightColors, dark: darkColors };