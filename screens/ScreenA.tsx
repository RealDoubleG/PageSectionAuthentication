import { View, Text, Button } from "react-native"
import { useNavigation } from "@react-navigation/native"

export function ScreenA() {
  const { navigate } = useNavigation()

  return(
    <View style={{flex: 1, backgroundColor: "#717", alignItems: "center", justifyContent: "center"}}>
      <Text style={{color: "#FFF", fontWeight: "600", fontSize: 34}}>Essa aqui é a tela A</Text>
      <Button title="Ir para a tela A" onPress={() => navigate("ScreenB")}/>
    </View>
  )
}