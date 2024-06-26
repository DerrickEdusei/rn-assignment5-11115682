// screens/HomeScreen.js
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../context/ThemeContext';

const HomeScreen = () => {
  const { theme } = useTheme();

  const transactions = [
    { icon: 'apple', name: 'Apple Store', category: 'Entertainment', amount: '- $5.99' },
    { icon: 'spotify', name: 'Spotify', category: 'Music', amount: '- $12.99' },
    { icon: 'money', name: 'Money Transfer', category: 'Transaction', amount: '$300' },
    { icon: 'shopping-cart', name: 'Grocery', category: '', amount: '- $88' },
  ];

  return (
    <Container>
      <Header>
        <WelcomeText>Welcome back,</WelcomeText>
        <UserName>Eric Atsu</UserName>
      </Header>
      <Card>
        <CardText>4562 1122 4595 7852</CardText>
        <CardInfo>
          <CardInfoText>AR Jonson</CardInfoText>
          <CardInfoText>24/2000</CardInfoText>
          <CardInfoText>6986</CardInfoText>
          <CardLogo>
            <Icon name="credit-card" size={32} color="#FF5A5F" />
          </CardLogo>
        </CardInfo>
      </Card>
      <ScrollView>
        <TransactionList>
          {transactions.map((transaction, index) => (
            <Transaction key={index}>
              <TransactionIcon>
                <Icon name={transaction.icon} size={32} color={theme.text} />
              </TransactionIcon>
              <TransactionDetails>
                <TransactionName>{transaction.name}</TransactionName>
                <TransactionCategory>{transaction.category}</TransactionCategory>
              </TransactionDetails>
              <TransactionAmount>{transaction.amount}</TransactionAmount>
            </Transaction>
          ))}
        </TransactionList>
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  padding: 16px;
`;

const Header = styled.View`
  margin-bottom: 24px;
`;

const WelcomeText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.text};
`;

const UserName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;

const Card = styled.View`
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 8px;
  padding: 16px;
  margin: 8px 0;
`;

const CardText = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.text};
  margin-bottom: 16px;
`;

const CardInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CardInfoText = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.text};
`;

const CardLogo = styled.View`
  flex: 1;
  align-items: flex-end;
`;

const TransactionList = styled.View`
  margin-top: 16px;
`;

const Transaction = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.borderColor};
`;

const TransactionIcon = styled.View`
  margin-right: 16px;
`;

const TransactionDetails = styled.View`
  flex: 1;
`;

const TransactionName = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.text};
`;

const TransactionCategory = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.subText};
`;

const TransactionAmount = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.text};
`;

export default HomeScreen;
