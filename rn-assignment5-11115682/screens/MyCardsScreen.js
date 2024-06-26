// screens/MyCardsScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const MyCardsScreen = () => {
  return (
    <Container>
      <Text>My Cards Screen</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  justify-content: center;
  align-items: center;
`;

export default MyCardsScreen;
