import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient).attrs({
  colors: ["#B83341", "#E03F50"],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 },
})`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  justify-content: center;
  align-items: center;
  padding: 0 32px;
`;

export const Form = styled.View`

`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.COLORS.TITLE};
  padding: 10px 0;
`;

export const ImagePizza = styled.Image`

`;

export const RecoveryPassword = styled.TouchableOpacity`
  align-items: flex-end;
  margin-top: 4px;
`;

export const RecoveryPasswordText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;