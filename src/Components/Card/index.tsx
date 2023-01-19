import React from "react";

import {
  Container,
  AreaImage,
  Image,
  AreaDescription,
  TitleArea,
  Title,
  Icon,
  Description,
  AreaIconButton,
  Separator
} from "./Styles";
interface Props {
  image: string;
  title: string;
  description: string;
}
interface CardProps {
  data: Props
}

export function Card({data} : CardProps) {
  return (
    <Container>
      <AreaImage>
        <Image source={data.image} />
      </AreaImage>
      <AreaDescription>
        <TitleArea>
          <Title>{data.title}</Title>
          <AreaIconButton>
            <Icon name="right" />
          </AreaIconButton>
        </TitleArea>
        <Description>
          {data.description}
        </Description>
        <Separator></Separator>
      </AreaDescription>
    </Container>
  );
}