import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AreaImage = styled.View`

`;

export const Image = styled.Image`
  width: 120px;
  height: 120px;
  margin-right: 4px;
`;

export const AreaDescription = styled.View`
  flex: 1;
`;

export const TitleArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  margin-bottom: 8px;
`;

export const Icon = styled(AntDesign)`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
`;

export const Description = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.SECONDARY_500};
`;

export const AreaIconButton = styled.TouchableOpacity`

`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  margin: 14px 0;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
`