import { ThemedText } from "@/components/ThemedText";
import SafeAreaBox from "@/constants/SafeAreaBox";
import {  useTheme } from "@/providers/ThemeProvider";
import { SafeAreaView, View } from "react-native";
import { Link } from "expo-router";


const App = () => {

  const { theme } = useTheme();
  return (    
   <SafeAreaView>
    <SafeAreaBox style={[theme.box]}>
      <View style={{display:'flex',alignContent:'center' ,justifyContent:'center',flexDirection:'column'}}>
        <ThemedText  type="title" style={[theme.text]}>Text</ThemedText>
        <Link href={"/CoffeePage"} style={[theme.primaryText,{textAlign:'center'}]}>Coffee</Link>
      </View>      
    </SafeAreaBox>
   </SafeAreaView>
  )
}
export default App;

