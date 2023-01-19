import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native";

export const Container = styled(TextInput).attrs(({ theme }) => ({
    placeholderTextColor: theme.COLORS.TITLE
}))`
  padding: 20px 21px;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  border-color: ${({ theme }) => theme.COLORS.PRIMARY_100};
  border-width: 1px;
  border-radius: 12px;
  margin-bottom: 16px;
`;