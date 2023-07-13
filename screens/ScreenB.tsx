import { View, Text } from "react-native"

export function ScreenB() {
  return(
    <View style={{flex: 1, backgroundColor: "#202020", alignItems: "center", justifyContent: "center"}}>
      <Text style={{color: "#FFF", fontWeight: "600", fontSize: 24}}>Essa aqui é a tela B</Text>
    </View>
  )
}