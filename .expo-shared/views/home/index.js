import { StatusBar } from "expo-status-bar";
import { Background } from "../../componets/gradient/gradient";
import {
  Container,
  TextComponet,
  ImageComponet,
  ButtonComponet,
  ButtonComponetTwo,
  Separator,
} from "./styled";


export const Home = ({navigation})=>{
  const handleClick=()=>{
    navigation.reset({
      index:0,
      routes: [{name: "Login"}]
    })
  }
    return(
<Background>
      <Container>
        <ImageComponet source={require("../../../assets/ring.png")} />
        <TextComponet>
          Bem-vindo a Terra-média!
        </TextComponet>
        <TextComponet>Aqui coisa incriveis podem acontecer!</TextComponet>

        <Separator>
        <ButtonComponetTwo onPress={handleClick} color="rgba(63, 69, 3, 0.95)" width="100" title="Próxima página"/>

        </Separator>
        <StatusBar style="auto" />
      </Container>
    </Background>

    )
}