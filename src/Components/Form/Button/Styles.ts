import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  padding: 16px 135px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_800};
  border-radius: 12px;
  align-items: center;
  margin-top: 37px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BUTTON};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;