import React from "react";
import { Button } from "../../Components/Form/Button";
import { Input } from "../../Components/Form/Input";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Form,
  Title,
  ImagePizza,
  RecoveryPassword,
  RecoveryPasswordText,
} from "./Styles";

export function SignIn() {

  const navigation = useNavigation();

  return (
    <Container>
      <Form>
        <ImagePizza source={require("../../assets/img/brand.png")} />
        <Title>Login</Title>
        <Input placeholder="E-mail" />
        <Input secureTextEntry={true} placeholder="Senha" />
        <RecoveryPassword>
          <RecoveryPasswordText>Esqueci minha senha</RecoveryPasswordText>
        </RecoveryPassword>
      </Form>
      <Button title="Entrar" onPress={() => navigation.navigate("Home")}/>
    </Container>
  );
}