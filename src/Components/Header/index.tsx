import React from "react";
import {
  Container,
  Head,
  UserInfo,
  User,
  UserGreething,
  UserWrapper,
  Icon,
  Emoji,
  IconAreaButton
} from "./Styles";

import { useNavigation } from "@react-navigation/native";

export function Header() {

  const navigation = useNavigation();

  return (
    <Container>
      <Head>
        <UserWrapper>
          <UserInfo>
            <Emoji source={require("../../assets/img/happy.png")} />
            <User>
              <UserGreething>Olá, Garçom</UserGreething>
            </User>
          </UserInfo>
          <IconAreaButton onPress={() => navigation.navigate("SignIn")}>
            <Icon name="sign-out" />
          </IconAreaButton>
        </UserWrapper>
      </Head>
    </Container>
  );
}