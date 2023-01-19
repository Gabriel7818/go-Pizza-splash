import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Octicons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  justify-content: space-between;
  align-items: center;
  max-height: ${RFPercentage(22)}px;
`;

export const Emoji = styled.Image`

`;

export const GreetingText = styled.Text`

`;

export const Greeting = styled.Text`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Head = styled.View`
  width: 100%;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const User = styled.View`
  margin-left: 12px;
`;

export const UserGreething = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const UserName = styled.Text`
  font-size: ${RFValue(18)}px;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${RFValue(58)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled(Octicons)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const IconAreaButton = styled.TouchableOpacity`

`;