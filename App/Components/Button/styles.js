// @flow
import styled from "styled-components";
import Text from "Romulus/App/Components/Text";

export const Container = styled.View`
  padding: 12px;
  background-color: ${props => props.theme.colors.grey};
  border-radius: 3px;
`;

export const ButtonText = styled(Text)`
  color: ${props => props.theme.colors.white};
  text-align: center;
`;
