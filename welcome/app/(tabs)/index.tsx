import { ThemedText } from "@/components/ThemedText";
import SafeAreaBox from "@/constants/SafeAreaBox";
import { useTheme } from "@/providers/ThemeProvider";
import { SafeAreaView, View } from "react-native";
const App = () => {

  const { theme } = useTheme();
  return (
   <SafeAreaView>
    <SafeAreaBox style={[theme.box,theme.text]}>
      <View style={{display:'flex',alignContent:'center' ,justifyContent:'center',flexDirection:'column'}}>
        <ThemedText  type="title" style={{textAlign:'center'}}>Text</ThemedText>
        
      </View>      
    </SafeAreaBox>
   </SafeAreaView>

  )
}
export default App;

