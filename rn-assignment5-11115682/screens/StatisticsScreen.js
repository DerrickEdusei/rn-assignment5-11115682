// screens/StatisticsScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const StatisticsScreen = () => {
  return (
    <Container>
      <Text>Statistics Screen</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  justify-content: center;
  align-items: center;
`;

export default StatisticsScreen;
