import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const AreaButtoMenu = styled.TouchableOpacity`
  padding: 26px 50px;
`;

export const TitleMenu = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  font-size: ${RFValue(20)}px;
`;

export const AreaButtonRequests = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 26px 50px;
`;

export const TitleRequest = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.SECONDARY_400};
  font-size: ${RFValue(20)}px;
  margin-right: 9px;
`;

export const CounterRequest = styled.View`
  width: 30px;
  height: 20px;
  background-color: ${({ theme }) => theme.COLORS.SUCCESS_900};
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

export const CounterRequestText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BUTTON};
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: ${RFValue(12)}px;
`;