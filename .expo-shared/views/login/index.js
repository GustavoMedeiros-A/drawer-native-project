import { useState } from "react";
import { Background } from "../../componets/gradient/gradient";
import {
  Container,
  TextComponet,
  ButtonComponetTwo,
  TextInputComponet

} from "./styled";

export const Login = ({ navigation }) => {

  const [text, setText]= useState('')
  const handleClick = () => {
    navigation.reset({
      routes: [{ name: "Home" }],
    });
  };
  return (
    <Background>
      <Container>
      <TextComponet>Bem-vindo ao primeiro desafio! {text}</TextComponet>
      <TextComponet>Aqui, você provará o seu valor pela prmeira vez!</TextComponet>
  <TextInputComponet onChangeText={(e)=> setText(e)} placeholder="Digite seu nome, aventureiro!"></TextInputComponet>
  <TextInputComponet onChangeText={(e)=> setText(e)} placeholder="Digite seu código secreto!"></TextInputComponet>
    
      <ButtonComponetTwo
        onPress={handleClick}
        color="rgba(63, 69, 3, 0.95)"
        width="100"
        title="Página anterior"
      /></Container>
    </Background>
  );
};
