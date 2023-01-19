import React from "react";
import { Card } from "../../Components/Card";
import { Header } from "../../Components/Header";
import { data } from "../../Utils/flavorPizzas";
import { TabsBar } from "../../Components/TabsBar";

import {
  Container,
  InputArea,
  InputSearch,
  InputText,
  IconClose,
  InputAreaSearchButton,
  IconSearch,
  InputAreaCloseButton,
  Menu,
  MenuTitleArea,
  TitleMenu,
  CounterPizzaMenu,
  Separator,
  ListPizzas,
  SeparatorMenu,
} from "./Styles";

export function Home() {
  return (
    <Container>
      <Header />
      <InputArea>
        <InputSearch>
          <InputText placeholder="Pesquise o sabor da sua pizza" />
          <InputAreaCloseButton>
            <IconClose name="close" />
          </InputAreaCloseButton>
        </InputSearch>
        <InputAreaSearchButton>
          <IconSearch name="search" />
        </InputAreaSearchButton>
      </InputArea>
      <Menu>
        <MenuTitleArea>
          <TitleMenu>Cardápio</TitleMenu>
          <CounterPizzaMenu>32 pizzas</CounterPizzaMenu>
        </MenuTitleArea>
        <Separator></Separator>
      </Menu>
      <ListPizzas
        data={data}
        horizontal={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card data={item} />}
      />
      <TabsBar />
    </Container>
  );
}