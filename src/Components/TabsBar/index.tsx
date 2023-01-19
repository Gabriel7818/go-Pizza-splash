import React from "react";

import {
  Container,
  AreaButtoMenu,
  TitleMenu,
  AreaButtonRequests,
  TitleRequest,
  CounterRequest,
  CounterRequestText,
} from "./Styles";

export function TabsBar() {
  return (
    <Container>
      <AreaButtoMenu>
        <TitleMenu>Cardápio</TitleMenu>
      </AreaButtoMenu>
      <AreaButtonRequests>
        <TitleRequest>Pedidos</TitleRequest>
        <CounterRequest>
        <CounterRequestText>1</CounterRequestText>
        </CounterRequest>
      </AreaButtonRequests>
    </Container>
  );
}