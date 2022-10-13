
import { Background } from "../../componets/gradient/gradient";
import 'react-native-gesture-handler';
import {
  Container,
  TextComponet,
  ButtonComponetTwo,
  TextInputComponet,
} from "./styled";

export const Registration = ({ navigation }) => {
 
  const handleClick = () => {
    alert('Cadastrado com sucesso!')
    navigation.reset({
      routes: [{ name: "Home" }],
    });
  };
  return (
    <Background>
      <Container>
        <TextComponet>Welcome to Registration page </TextComponet>
          <TextInputComponet
          placeholder="Email"
        ></TextInputComponet>
        <TextInputComponet
          placeholder="Senha"
        ></TextInputComponet>
        <TextInputComponet
          placeholder="Repita a senha"
        ></TextInputComponet>

        <ButtonComponetTwo
          onPress={handleClick}
          color="rgba(63, 69, 3, 0.95)"
         
          title="Registrar"
        />
      </Container>
    </Background>
  );
};
