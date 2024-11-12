import { useTheme } from "@/providers/ThemeProvider";
import { FC, ReactNode } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SafeAreaBox:FC<{children:ReactNode,style:any}> = ({ children, style, ...props }) => {
    const insets = useSafeAreaInsets();
    const { theme } = useTheme();
    return (
        <View style={[theme.container, {
            marginTop: insets.top,
            marginBottom: insets.bottom,
            marginLeft: insets.left,
            marginRight: insets.right,
        }, style]}
            {...props}>
            {children}
        </View>
    )
}
export default SafeAreaBox;