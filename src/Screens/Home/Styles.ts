import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const InputArea = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: -24px;
  padding: 0 24px;
  width: 100%;
`;

export const InputSearch = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  height: 48px;
  background-color: ${({ theme }) => theme.COLORS.TITLE};
  border-radius: 16px;
`;

export const IconClose = styled(Ionicons)`
  font-size: ${RFValue(16)}px;
  padding: 15px 6px;
`;

export const InputAreaSearchButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.SUCCESS_900};
  width: 49px;
  height: 49px;
  border-radius: 12px;
  margin-left: 7px;
`;

export const IconSearch = styled(Ionicons)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const InputAreaCloseButton = styled.TouchableOpacity`

`;

export const Menu = styled.View`
  padding: 0 24px;
  margin-top: 25px;
`;

export const MenuTitleArea = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

export const TitleMenu = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  font-size: ${RFValue(20)}px;
`;
export const CounterPizzaMenu = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  margin: 20px 0;
`;

export const ListPizzas = styled.FlatList`
  flex: 1;
  padding: 0 24px;
`;

export const SeparatorMenu = styled.View`
  width: 200px;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const InputText = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.TITLE,
}))`
  padding: 15px 6px;
`;